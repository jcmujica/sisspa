import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sisspa.cl',
  server: {
    allowedHosts: ['sisspa.cl', 'e8e1-186-106-182-229.ngrok-free.app'],
  },
});
