import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/myWebpage/",
    build: {
        outDir: "docs",
        rollupOptions:{
            input: {
                main: resolve(__dirname, "index.html"),
                Hobbies: resolve(__dirname, "Hobbies/index.html"),
                Colors: resolve(__dirname, "Colors/index.html"),
            },
        },
    },
});