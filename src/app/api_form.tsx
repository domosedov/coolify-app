"use client";

import { useState } from "react";

export default function ApiForm() {
  const [name, setName] = useState<string>();
  const [output, setOutput] = useState<unknown>();

  return (
    <div className="border border-dotted border-blue-500 p-2 mt-4">
      <p>This is an API form</p>
      {!!output && <p>Output: {JSON.stringify(output, null, 2)}</p>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({ name }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          setOutput(data);
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-blue-500 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
