# CookieBot

Websie: [cookiebot.com](https://cookiebot.com)


## Configuration

```typescript
export default defineNuxtConfig({
    cookieConsent: {
        provider: 'cookiebot',
        cbid: '00000000-0000-0000-0000-000000000000', // Replace with you own cbid

        // Optional
        consentMode: false, // Disable consent mode (default: true)
        consentModeDefaults: false, // Disable content mode defaults (default: true)
    }
})
```

## Consent mode
By default CookieBot enables Consent Mode (opt-out).

[Read more about Google Consent Mode in CookieBot &rarr;](https://support.cookiebot.com/hc/en-us/articles/360016047000-Cookiebot-and-Google-Consent-Mode)

## Type Declaration
<<< @/../src/runtime/types/types.d.ts#moduleGeneralOptionsCookieBot{typescript}
