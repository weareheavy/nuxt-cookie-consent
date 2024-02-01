# Getting started

This Nuxt module provides an easy and convenient way to interact with cookie consent platoforms, using a unified simple interface.

## Installation
Install the `@weareheavy/nuxt-cookie-consent` module using your favorite package manager.

::: code-group
```bash [npm]
npm install @weareheavy/nuxt-cookie-consent
```

```bash [yarn]
yarn add @weareheavy/nuxt-cookie-consent
```

```bash [bun]
bun install @weareheavy/nuxt-cookie-consent
```
:::

## Initialize module
Add the module to your `nuxt.config.ts` file.

```typescript
export default defineNuxtConfig({
    modules: ['@weareheavy/nuxt-cookie-consent']
    // ...
})
```

## Configure your provider
Setup the supported provider in the `cookieConsent` option.

::: code-group
```typescript [CookieBot]
export default defineNuxtConfig({
    modules: ['@weareheavy/nuxt-cookie-consent']
    cookieConsent: {
        provider: 'cookiebot',
        cbid: '00000000-0000-0000-0000-000000000000' // Replace with you "cbid" from CookieBot
    }
})
```

```typescript [CookieInformation]
export default defineNuxtConfig({
    modules: ['@weareheavy/nuxt-cookie-consent']
    cookieConsent: {
        provider: 'cookieinformation',
        culture: 'EN' // Replace with the culture you want to apply
    }
})
```
:::