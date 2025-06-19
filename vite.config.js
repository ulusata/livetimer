import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/livetimer/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
