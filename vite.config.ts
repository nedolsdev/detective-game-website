import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// basic ssl
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react(), basicSsl()],
});
