import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        popup: "src/popup.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    minify: true,
  },
});
