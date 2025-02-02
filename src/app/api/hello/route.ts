import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  return Response.json({ message: "Hello, Next.js!", body });
}
