import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use '@/app/styles/variables.scss' as *;",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@icons": "/src/shared/ui/icons"
    }
  },
});
