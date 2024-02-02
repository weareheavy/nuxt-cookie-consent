# useCookieConsent

This composable gives you an reactive way to interact with the state of the approved categories.

This is useful for adjusting options or general behaviour based on weather or not a specific category has been approved.

This composable is autoloaded by Nuxt.


```vue
<template>
  <div v-if="consent.statistic">
    <p>This is only visible if the "statistic" category has been approved.</p>
  </div>

  <div v-if="allowedStatisticsAndMarketing">
    <p>This is only visible if the "statistic" and "marketing" categories has been approved.</p>
  </div>
</template>

<script setup lang="ts">
const { state } = useCookieConsent()

// Using the composable in your script
const allowedStatisticsAndMarketing = computed(() => {
  return state.value.statistic && state.value.marketing
})
</script>
```

## Utils
The composable exposes two utility functions called `show` and `renew`.
These functions triggers the equilivant on the provider script exposed in on the `window` object.

These functions triggers the consent modal. This is useful if users want's to change their preferences or you need for them to re-consider their choices to access a specific feature.

## Type declaration
<<< @/../src/runtime/types/types.d.ts#consentState{typescript}
