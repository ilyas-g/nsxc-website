<script setup lang="ts">
// import TheWelcome from '~/components/mindset/TheWelcome.vue'

import Header from '~/components/mindset/header/Header.vue'
import Footer from '~/components/mindset/footer/Footer.vue'
import SectionFirst from '~/components/mindset/sectionFirst/SectionFirst.vue'
import WhiteBar from '~/components/mindset/whiteBar/WhiteBar.vue'
import SectionSecond from '~/components/mindset/sectionSecond/SectionSecond.vue'
import SectionThird from '~/components/mindset/sectionThird/SectionThird.vue'
import SectionThirdBis from '~/components/mindset/sectionThirdBis/SectionThirdBis.vue'
import SectionStaff from '~/components/mindset/sectionStaff/SectionStaff.vue'
import SectionPartners from '~/components/mindset/sectionPartners/SectionPartners.vue'
import Contact from '~/components/mindset/contactBlock/ContactBlock.vue'
import Modal from '~/components/mindset/modal/Modal.vue'

import { ref } from 'vue'

import { VueLenis, useLenis } from 'lenis/vue' // Also available as global imports, no need to import them manually
import { watch } from 'vue'

const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis)
  },
  { immediate: true }
)

const isContact = ref(false);
const toggleContact = (toggleValue: boolean) => {
  isContact.value = toggleValue;
  console.log("vraiaiaiai");
  
};

useSeoMeta({
  title: 'NSXC - MINDSET 266666666666666666666666666666665',
  keywords: 'Mindset, NSXC, tournois, événement, jeux vidéo, motivation, détermination, soi, meilleur, mentalité, attitude, comportement, émotions, feeling, fihgitng games, jeux de combat, Street Fighter, Street Fighter 6, 2XKO, Riot, Tekken 8, Tekken, COTW',
  ogTitle: 'NSXC - MINDSET 25666666666',
  description: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogDescription: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogImage: 'https://pbs.twimg.com/media/GdZPSB-W0AAqPpq?format=jpg&name=large',
  twitterTitle: 'NSXC - MINDSET 25',
  twitterImage: '~/public/img/seo-screen.webp',
  twitterCard: 'summary_large_image',
  twitterImageAlt: 'NSXC - MINDSET 25',
  twitterSite: '@_NSxC',
  twitterCreator: '@iamarktall',
  twitterDescription: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.'
})
</script>

<template>
  <VueLenis root :options="lenisOptions" />
  <Header @toggle-contact="toggleContact(true)" />
  <main id="smooth-content">
    <SectionFirst />
    <WhiteBar />
    <SectionSecond />
    <SectionThirdBis />
    <SectionStaff />
    <SectionThird />
    <SectionPartners />
  </main>
  <Footer @toggle-contact="toggleContact(true)" />
  <div v-if="isContact === true">
    <Contact mail="nsxc.pro@gmail.com" @toggle-contact="toggleContact(false)" />
  </div>

</template>


<style lang="scss">
@use '~/assets/mindset/css/_section.scss';
@import url("~/assets/mindset/css/index.css");
</style>
