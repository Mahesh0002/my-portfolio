import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  root: 'src', // Vite starts here
  publicDir: '../public',
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: '../dist', // Move the built files out of src/
    emptyOutDir: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
