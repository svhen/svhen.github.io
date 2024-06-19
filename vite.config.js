import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://svhen.github.io/svhenx",
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  esbuild: {
    include: /\.[jt]sx?$/,
    exclude: [],
    loader: "jsx",
  },
});
