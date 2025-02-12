import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { resolve } from 'path';



export default defineConfig({
    plugins: [react()],
    base: "/myWebpage/",
    build: {
        outDir: "docs",
        rollupOptions:{
            input: {
                main: resolve(__dirname, 'index.html'),
                Hobbies: resolve(__dirname, 'Hobbies/index.html'),
                Colors: resolve(__dirname, 'Colors/index.html'),
                react: resolve(__dirname, 'react/index.html'),
            },
        },
    },
});