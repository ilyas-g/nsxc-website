<script setup lang="ts">
import type { NuxtError } from '#app'
import Header from '~/components/mindset/header/Header.vue'
import Footer from '~/components/mindset/footer/Footer.vue'
import Contact from '~/components/mindset/contactBlock/ContactBlock.vue'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <main>
        <div class="p-absolute-center">
            <h2 class="error-message">OUPS! nothing here!</h2>
            <h2 class="error-message">Click below!</h2>

            <NuxtLink to="/mindset"><img src="/img/mindset-logo-2.webp" alt="Logo Mindset" class="logo-mindset logo-main-page" /></NuxtLink>
        </div>
    </main>
</template>
<style lang="scss">
@use "~/assets/mindset/css/variables";
@use '~/assets/mindset/css/section';
@use "sass:color";

@import url("~/assets/global/css/index.css");
.p-absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.error-message {
    color: variables.$white;
    text-align: center;
}
</style>
