<template>
  <div class="w-full text-center my-8 tracking-wide">
    Build with 🤍 at
    <a
      class="tracking-tighter font-semibold"
      href="https://weareheavy.com"
      target="_blank"
      ><span class="mr-1">WEAREHEAVY™</span> ☻</a
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

a:hover {
  background: linear-gradient(120deg, #ffe95e 30%, #c0a510);
  background-clip: text;
}
</style>
