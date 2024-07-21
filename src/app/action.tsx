"use client";

import { useState } from "react";
import { generateUuid } from "./actions";

export const Action = () => {
  const [uuid, setUuid] = useState<string>();

  return (
    <div className="border border-dotted border-orange-500 p-2">
      <p>This is an action</p>
      {uuid && <p>UUID: {uuid}</p>}
      <button
        type="button"
        onClick={async () => {
          const newUuid = await generateUuid();
          setUuid(newUuid);
        }}
        className="bg-orange-500 text-white px-4 py-2 rounded-md"
      >
        Generate UUID
      </button>
    </div>
  );
};
