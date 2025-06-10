<template>
  <div>
    <img src="/img/NSXC_BLANC.png" alt="Logo NSXC" class="logo-nsxc logo-main-page" />
    <NuxtLink to="/mindset25"><img src="/img/mindset-logo.webp" alt="Logo Mindset" class="logo-mindset logo-main-page" /></NuxtLink>
  </div>
</template>
<style>
@import url("~/assets/global/css/index.css");
</style>

<script setup lang="ts">


useSeoMeta({
  title: 'NSXC',
  ogTitle: 'NSXC',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
