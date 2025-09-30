// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "8v549uft",
  dataset: "production",
  title: "Studio",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
});
