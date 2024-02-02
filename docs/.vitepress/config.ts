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
          {
            text: 'Usage',
            items: [
              {
                text: 'useCookieConsent',
                link: '/documentation/useCookieConsent',
              },
              { text: 'Consent Policy', link: '/documentation/consent-policy' },
            ],
          },
          {
            text: 'Providers',
            link: '/documentation/providers',
            items: [
              {
                text: 'CookieBot',
                link: '/documentation/providers/cookiebot',
              },
              {
                text: 'CookieInformation',
                link: '/documentation/providers/cookieinformation',
              },
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
