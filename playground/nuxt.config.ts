export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  cookieConsent: {
    provider: 'cookieinformation',
    // cbid: '00000000-0000-0000-0000-000000000000',
    culture: 'EN',
    dev: true,
    scripts: {
      necessary: [
        {
          id: 'necessary',
          innerHTML: 'console.log("necessary")',
          type: 'text/javascript',
        },
      ],
      functional: [
        {
          id: 'functional',
          innerHTML: 'console.log("functional")',
          type: 'text/javascript',
        },
      ],
      statistic: [
        {
          id: 'statistic',
          innerHTML: 'console.log("statistic")',
          type: 'text/javascript',
        },
      ],
      marketing: [
        {
          id: 'marketing',
          innerHTML: 'console.log("marketing")',
          type: 'text/javascript',
        },
      ],
    },
  },
})
