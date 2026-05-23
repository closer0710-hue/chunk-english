// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://chunk-english.pages.dev',
  adapter: cloudflare(),
  output: 'static',
});
