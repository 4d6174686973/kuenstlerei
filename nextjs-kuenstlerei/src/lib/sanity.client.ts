import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "wr7t1fhw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});