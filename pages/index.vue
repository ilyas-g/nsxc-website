<template>
  <div>
    <img src="/img/NSXC_BLANC.png" alt="Logo NSXC" class="logo-nsxc logo-main-page" />
    <NuxtLink to="/mindset"><img src="/img/mindset-logo.webp" alt="Logo Mindset" class="logo-mindset logo-main-page" /></NuxtLink>
  </div>
</template>
<style>
@import url("~/assets/global/css/index.css");
</style>

<script setup lang="ts">


useSeoMeta({
  title: 'NSXC',
  ogTitle: 'NSXC',
  description: 'With almost 10 years of experience in organizing competitive events , we make it a point of honour to be surrounded by passionate,volunteers and professionals. “By the community for the community “ is the credo that drive us. We created the “NSxC” collective to carry out this kind of project .',
  ogDescription: 'With almost 10 years of experience in organizing competitive events , we make it a point of honour to be surrounded by passionate,volunteers and professionals. “By the community for the community “ is the credo that drive us. We created the “NSxC” collective to carry out this kind of project .',
  ogImage: '~/public/img/seo-screen.webp',
  twitterTitle: 'NSXC - MINDSET 25',
  twitterImage: '~/public/img/seo-nsxc.jfif',
  twitterCard: 'summary_large_image',
  twitterImageAlt: 'NSXC'
})
</script>
