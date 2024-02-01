import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Cookie Consent',
  description: 'Simple way to work with cookie policy providers in Nuxt 3.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/documentation' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting started', link: '/documentation' },
          { text: 'Configuration', link: '/documentation/configuration' },
          { text: 'Providers', link: '/documentation/providers' },
          {
            text: 'Usage',
            items: [
              { text: 'Consent State', link: '/documentation/consent-state' },
              { text: 'Consent Policy', link: '/documentation/consent-policy' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/weareheavy/nuxt-cookie-consent',
      },
    ],
  },
})
