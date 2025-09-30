import react from "@astrojs/react";

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [react()],
  output: "static",
};
