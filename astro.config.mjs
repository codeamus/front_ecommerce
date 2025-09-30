import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless"; // o edge si prefieres

export default {
  adapter: vercel(),
  integrations: [react()],
};
