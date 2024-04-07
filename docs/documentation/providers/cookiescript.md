# CookieScript

Websie: [cookiescript.com](https://cookiescript.com)


## Configuration

```typescript
export default defineNuxtConfig({
    cookieConsent: {
        provider: 'cookiescript',
        id: '00000000000000000000000000000000', // Replace with you own id
    }
})
```

## Consent mode
By default CookieScript enables Consent Mode (opt-out).

[Read more about Google Consent Mode in CookieScript &rarr;](https://help.cookie-script.com/en/google-analytics/google-consent-mode-implementation-instructions)

## Type Declaration
<<< @/../src/runtime/types/types.d.ts#moduleGeneralOptionsCookieScript{typescript}
