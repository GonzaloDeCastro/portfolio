import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORRECCIÓN: Agregar barras inclinadas al inicio y al final
  base: "/portfolio/",
});
