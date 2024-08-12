import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,

  devToolbar: {
    enabled: false,
  },

  build: {
    inlineStylesheets: 'always',
  },

  integrations: [auth(), tailwind(), db()],

  output: 'server',
  site: 'https://forever6m.vercel.app/',

  adapter: vercel({
    webAnalytics: {
      enabled: false,
    }
  }),

  /* vite: {
    build: {
      cssMinify: 'lightningcss',
    }
  } */
});