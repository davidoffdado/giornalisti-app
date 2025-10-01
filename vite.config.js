import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Sostituisci "giornalisti-app" con il nome della tua repo GitHub
export default defineConfig({
  plugins: [svelte()],
  base: '/giornalisti-app/',
});
