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
// import useDimension from './utils/useDimension.js'

// import useDimension from '~/pages/mindset/utils/useDimension.js'

import { ref } from 'vue'

// const {width} = useDimension()

import Lenis from 'lenis'

const isContact = ref(false);
const toggleContact = (toggleValue: boolean) => {
  isContact.value = toggleValue;
  console.log("vraiaiaiai");
  
};
// const isModal = ref(false)
// const toggleModal = (toggleValue: boolean) => {
//     isModal.value = toggleValue;

//     if(isModal.value === true) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }
// };

// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });
// const {width} = useDimension()

useSeoMeta({
  title: 'NSXC - MINDSET 25',
  ogTitle: 'NSXC - MINDSET 25',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Header @toggle-contact="toggleContact(true)" />
  <main id="smooth-content">
    <SectionFirst @toggle-modal="toggleModal(true)"/>
    <WhiteBar />
    <SectionSecond />
    <SectionThirdBis />
    <SectionStaff />
    <SectionThird />
    <SectionPartners />
  </main>
  <Footer @toggle-contact="toggleContact(true)" @toggle-classement="toggleClassement(true)" />
  <div v-if="isContact === true">
    <Contact mail="nsxcpro@gmail.com" @toggle-contact="toggleContact(false)" />
  </div>

</template>


<style lang="scss">
@use '~/assets/mindset/css/_section.scss';
@import url("~/assets/mindset/css/index.css");
</style>
