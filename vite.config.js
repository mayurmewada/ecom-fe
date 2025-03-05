import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // This should be correct for Vercel
  build: {
    outDir: "dist", // Make sure Vercel uses 'dist' as output
  },
  server: {
    port: 1111, // For local development (not relevant to Vercel)
  }
});