import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      removeMetadata: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const chunks = [
            "react-collapsible",
            "react-image-gallery",
            "react-photo-album",
            "react-responsive",
            "react-router-dom",
            "react",
            "fortawesome",
          ];

          for (const chunk of chunks) {
            if (id.includes(chunk)) {
              return chunk;
            }
          }

          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
