import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    format: "esm",
    outDir: "dist",
    target: "esnext",
    metafile: true,
    outExtension() {
      return {
        js: ".mjs",
      };
    },
  },
  {
    entry: ["src/"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    format: "cjs",
    outDir: "dist/cjs",
    target: "esnext",
    metafile: true,
    outExtension() {
      return {
        js: ".cjs",
      };
    },
  },
]);
