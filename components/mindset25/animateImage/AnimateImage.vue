<template>
    <img class="character" :src=character />
</template>
<script setup lang="ts">
import character from '~/public/img/raiden.webp'

</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
    .character {
        margin: auto;
        width: 260px;

        @media screen and (min-width: variables.$media-queries-mobile) {
            width: 300px;
        }

        @media screen and (min-width: variables.$media-queries-tablet-small) {
            width: 400px;
        }
    }
</style>
