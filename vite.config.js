import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, "client/src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
      "@/app": path.resolve(srcPath, "app"),
      "@/features": path.resolve(srcPath, "features"),
      "@/entities": path.resolve(srcPath, "entities"),
      "@/widgets": path.resolve(srcPath, "widgets"),
      "@/shared": path.resolve(srcPath, "shared"),
    },
  },
});
