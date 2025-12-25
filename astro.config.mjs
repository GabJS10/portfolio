// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      allowedHosts: ["774676c16942.ngrok-free.app"],
    },
    plugins: [tailwindcss()],
  },
});
