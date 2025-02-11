import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Multi-page-site/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                alerts: resolve(__dirname, "alerts.html"),
                profile: resolve(__dirname, "profile.html"),
                simple: resolve(__dirname, "simpleSite.html"),
                color: resolve(__dirname, "colorGenerator.html")
            }

        }
    }
})