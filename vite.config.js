import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"), // ~/button -> app/button
    },
  },
});
