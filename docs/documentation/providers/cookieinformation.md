# CookieInformation

Websie: [cookieinformation.com](https://cookieinformation.com)


## Configuration

```typescript
export default defineNuxtConfig({
    cookieConsent: {
        provider: 'cookiebot',

        // Optional
        culture: 'EN', // Replace with you culture (default: EN)
        gcm: string, // Enable consten mode e.g. "2.0" (default: undefined)
    }
})
```

## Consent mode
CookieInformation don't have Consent Mode on by default (opt-in).

[Read more about Google Consent Mode in CookieInformation &rarr;](https://support.cookieinformation.com/en/articles/8886647-consent-mode-v2-implementation)

## Type Declaration
<<< @/../src/runtime/types/types.d.ts#moduleGeneralOptionsCookieInformation{typescript}
