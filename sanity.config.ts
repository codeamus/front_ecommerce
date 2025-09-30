import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Puedes hardcodear projectId/dataset si prefieres evitar fallos en build.
export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "8v549uft",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  title: "Studio",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
});
