import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true, // Opens the browser automatically when the server starts
    cors: true, // Allows cross-origin resource sharing
  },
});
