import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), tailwind(), db()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});