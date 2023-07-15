// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import compress from 'astro-compress';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
    }),
    compress(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  experimental: {
    assets: true,
  },
});
