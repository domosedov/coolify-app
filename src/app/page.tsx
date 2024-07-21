import { Action } from "./action";
import ApiForm from "./api_form";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type SearchParams = {
  limit?: string;
  offset?: string;
};

async function getTodos({ limit = "5", offset = "0" }: SearchParams) {
  const url = new URL("https://jsonplaceholder.typicode.com/todos");
  url.searchParams.set("_limit", limit.toString());
  url.searchParams.set("_start", offset.toString());
  const res = await fetch(url);
  const data = await res.json();
  return data as Todo[];
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const todos = await getTodos(searchParams);

  return (
    <div className="container mx-auto p-4">
      <h1>Todos</h1>
      <Action />
      <ApiForm />
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border border-dashed border-gray-500 rounded-md p-4 flex items-center gap-2"
          >
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
