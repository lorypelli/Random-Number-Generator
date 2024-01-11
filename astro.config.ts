import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    server: {
        host: '127.0.0.1',
        port: 5173
    },
    vite: {
        build: {
            assetsInlineLimit: 0
        }
    }
});
