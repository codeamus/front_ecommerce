import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  console.warn(
    "[sanity] Faltan PUBLIC_SANITY_PROJECT_ID / PUBLIC_SANITY_DATASET"
  );
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: "2025-09-01", // usa una fecha fija reciente
  useCdn: true,
});
