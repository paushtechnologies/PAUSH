// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // <- important for GH Pages (repo name)
  plugins: [react()],
});
