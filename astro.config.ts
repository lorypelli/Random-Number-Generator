import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import { readdirSync } from 'fs';
export default defineConfig({
    output: 'server',
    adapter: vercel({
        includeFiles: readdirSync('./translations')
    }),
    server: {
        open: true,
        host: '127.0.0.1',
        port: 5173
    },
    vite: {
        build: {
            assetsInlineLimit: 0
        }
    }
});
