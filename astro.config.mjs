import { defineConfig } from 'astro/config';
import auth from "auth-astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), tailwind()]
});