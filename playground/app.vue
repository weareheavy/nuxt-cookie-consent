<template>
  <div>
    <pre>{{ state }}</pre>
    <LazyNuxtCookieConsentPolicy />
    <button @click="show">Show modal</button>
  </div>
</template>

<script setup lang="ts">
const { state, show } = useCookieConsent()
</script>
