import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "src/lib"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@tests": path.resolve(__dirname, "src/tests"),
      "@context": path.resolve(__dirname, "src/context"),
      "@route": path.resolve(__dirname, "src/route")
    }
  },
  server: {
    port: 4173,
    open: false
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  preview: {
    port: 4173
  },

  // ✅ Vitest config must be nested here
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/tests/setup.ts"],
    alias: {
      "@context": path.resolve(__dirname, "src/context"),
      "@route": path.resolve(__dirname, "src/route")
    }
  }
});