import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// basic ssl
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
});
