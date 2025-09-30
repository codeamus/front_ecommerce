import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Puedes hardcodear projectId/dataset si prefieres evitar fallos en build.
export default defineConfig({
  projectId: "8v549uft",
  dataset: "production",
  basePath: "/studio", // 👈 importante
  // ...
});

