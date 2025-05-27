<script setup lang="ts">
// import TheWelcome from '~/components/mindset25/TheWelcome.vue'

import Header from '~/components/mindset25/header/Header.vue'
import Footer from '~/components/mindset25/footer/Footer.vue'
import SectionFirst from '~/components/mindset25/sectionFirst/SectionFirst.vue'
import WhiteBar from '~/components/mindset25/whiteBar/WhiteBar.vue'
import SectionSecond from '~/components/mindset25/sectionSecond/SectionSecond.vue'
import SectionThird from '~/components/mindset25/sectionThird/SectionThird.vue'
import SectionThirdBis from '~/components/mindset25/sectionThirdBis/SectionThirdBis.vue'
import SectionStaff from '~/components/mindset25/sectionStaff/SectionStaff.vue'
import SectionPartners from '~/components/mindset25/sectionPartners/SectionPartners.vue'

// import useDimension from '~/pages/mindset25/utils/useDimension.js'

import { ref } from 'vue'

// const {width} = useDimension()

const isModal = ref(false)
const toggleModal = (toggleValue: boolean) => {
    isModal.value = toggleValue;
};
</script>

<template>
  <Header />
  <main>
    <SectionFirst @toggle-modal="toggleModal(true)"/>
    <WhiteBar />
    <SectionSecond />
    <SectionThirdBis />
    <SectionStaff />
    <SectionThird />
    <SectionPartners />
  </main>
  <Footer @toggle-contact="toggleContact(true)" @toggle-classement="toggleClassement(true)" />

</template>
<style lang="scss">
@use '~/assets/mindset25/css/_section.scss';
@import url("~/assets/mindset25/css/index.css");


</style>
