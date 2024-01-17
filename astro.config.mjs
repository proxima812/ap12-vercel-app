import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/data/config'
import keystatic from '@keystatic/astro'

import markdoc from "@astrojs/markdoc"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(), keystatic(), react(), markdoc()],
  site: SITE_URL,
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false
    }
  }
});