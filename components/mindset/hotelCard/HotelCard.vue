<template>
    <div class="cardHotel">
        <div class="cardHotel-head">
            <img :src="imgSrc" :alt="title" />
        </div>
        <div class="cardHotel-body">
            <div class="title">
                <h3 class="text-center">{{ title }}</h3>
            </div>
            
            <div class="desc">
                <!-- <p class="text-center">{{ description }}</p> -->
                 <!-- <p><span class="icon-instagram"></span> to venue</p> -->
                <p class="text-center adress">{{ adress }}</p>
            </div>
            <div class="button">
                <a :href="link" target="_blank" class="btn-ope video cardHotel-btn">{{ t("bookARoom") }}</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'
const { t } = useI18n()

defineProps<{
  title: string,
  format: string,
  imgSrc: string,
  description: string,
  adress: string,
  link?: string,
  textButton: string
}>()
</script>
<style lang="scss">
@use "./style.scss";

</style>
