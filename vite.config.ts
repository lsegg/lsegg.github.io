import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // GitHub Pages serves this site from the /docs folder on main
    // (Settings > Pages > Deploy from a branch), so the build has to land
    // there rather than in the default, git-ignored dist/.
    outDir: "docs",
    // Clear stale hashed assets instead of letting every build pile up.
    // Required explicitly: Vite refuses to empty an outDir other than dist/.
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
