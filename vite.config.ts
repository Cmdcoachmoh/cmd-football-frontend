import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // ✅ Ensures relative paths work in static hosting (Railway, Netlify, Vercel)
  base: "./",

  plugins: [react()],

  // ✅ Alias resolution for modular imports
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

  // ✅ Dev server config
  server: {
    port: 4173,
    open: false
  },

  // ✅ Build config for optimized output
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separates vendor code for better caching
          }
        }
      }
    }
  },

  // ✅ Preview config for Railway compatibility
  preview: {
    port: 4173
  },

  // ✅ Vitest integration
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
