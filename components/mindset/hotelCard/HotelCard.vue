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

                <div class="desc-flex">
                    <p><span class="icon-directions_walk"></span> <small>{{ timeToVenue }}</small></p>
                    <p><span class="icon-coin-euro"></span> <small>{{ hotelPrice }}</small></p>
                </div>

            </div>
            <div class="button">
                <a :href="link" target="_blank" class="btn-ope video cardHotel-btn">{{ t("bookARoom") }}</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()

defineProps<{
  title: string,
  format: string,
  imgSrc: string,
  description: string,
  adress: string,
  link?: string,
  textButton: string,
  timeToVenue: string,
  hotelPrice: string
}>()
</script>
<style lang="scss">
@use "./style.scss";

.desc-flex {
    display: flex;
    justify-content: space-around;

    span {
        display: block;
        text-align: center;
    }
}
</style>
