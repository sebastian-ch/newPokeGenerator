import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sebastian-ch.github.io/newPokeGenerator/",
  plugins: [react()],
});
