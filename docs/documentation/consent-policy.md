# Consent Policy

It's important that you have a page describing you policy and the usage of your cookies.
The provides provide a way to inject a policy into a page.

The module auto-imports the `NuxtCookieConsentPolicy` into Nuxt, so it's globally available.

```vue
<template>
  <div>
    <NuxtCookieConsentPolicy />
  </div>
</template>
```

Since it's autoloaded by Nuxt, you can also use `LazyNuxtCookieConsentPolicy`. If you want to know more about "Lazy" vs. "non-Lazy", you can read more in the [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports).

<div class="pt-6"></div>

::: warning Notice
This component is **"client-only."** The reasoning is that the way providers inject the policy results in a _hydration mismatch_ error when rendered on the server.
The functionality isn't affected by the type. But you might experience the text "blink in" due to it being loaded on the client.
:::