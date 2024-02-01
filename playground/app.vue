<template>
  <div>
    <pre>{{ consent }}</pre>
    <LazyNuxtCookieConsentPolicy />
  </div>
</template>

<script setup lang="ts">
const consent = useCookieConsent()
</script>
