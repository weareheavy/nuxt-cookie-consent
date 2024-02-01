# Consent state

The consent state is a _composable_ that gives you an reactive way to interact with the state of the approved categories.

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
const consent = useCookieConsent()

// Using the composable in your script
const allowedStatisticsAndMarketing = computed(() => {
  return consent.value.statistic && consent.value.marketing
})
</script>
```

## Type declaration
<<< @/../src/runtime/types/types.d.ts#consentState{typescript}
