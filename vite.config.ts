import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // ✅ SWC for faster builds
import path from "path";

export default defineConfig({
  base: "./", // ✅ Ensures relative paths work in static hosting (Railway, Netlify, Vercel)
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "src/lib"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@tests": path.resolve(__dirname, "src/tests")
    }
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // ✅ Separates vendor code for better caching
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  preview: {
    port: 4173
  }
});
