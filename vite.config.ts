import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env["GITHUB_PAGES"] === "true" ? "/jeevangeovadakken/" : "/",
  resolve: { tsconfigPaths: true },
  plugins: [tanstackRouter({ target: "react" }), react(), tailwindcss()],
});
