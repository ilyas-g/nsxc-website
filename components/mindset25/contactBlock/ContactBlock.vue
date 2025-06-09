<template>
    <div id="contact">
        <div class="close"><span class="icon-xmark-solid" @click="$emit('toggleContact')"></span></div>
        {{ t("forMoreInformations") }}
        <br /><a class="mail" :href="`mailto:${mail}`">{{mail}}</a>
        <div class="social">
            {{ t("joinOnSocialMedia") }}
            <NuxtLink to="https://www.instagram.com/__nsxc" target="_blank"><span class="icon-instagram"></span></NuxtLink>
            <NuxtLink to="https://x.com/_NSxC" target="_blank"><span class="icon-x"></span></NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    mail: string,
}>()
const { t } = useI18n()

</script>
<style>
@import "./style.scss";
</style>
