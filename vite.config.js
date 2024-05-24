import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: "./testSetup.js",
    globals: true,
    environment: "jsdom",
    // css: {
    //   include: "./src/index.css"
    // }
    css: true,
  },
});
