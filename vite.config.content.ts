import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        content: "src/content.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    minify: true,
  },
});
