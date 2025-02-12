import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/myWebpage/",
    build: {
        outDir: "docs",
        rollupOptions:{
            input: {
                main: "./index.html",
                Hobbies:  "Hobbies/index.html",
                Colors: "Colors/index.html",
                react: "react/index.html",
            },
        },
    },
});




