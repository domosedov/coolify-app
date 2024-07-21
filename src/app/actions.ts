"use server";

import { randomUUID } from "node:crypto";

export async function generateUuid() {
  return randomUUID();
}
