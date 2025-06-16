<template>
    <div class="cardStaff">
        <div class="cardStaff-head">
            <img :src="imgSrc" :alt="title" />
        </div>
        <div class="cardStaff-body">
            <div class="title">
                <h3 class="text-center">{{ title }}</h3>
            </div>
            
            <div class="desc">
                <!-- <p class="text-center">{{ description }}</p> -->
                <p class="text-center adress">{{ adress }}</p>
            </div>
            <div class="button">
                <a :href="link" target="_blank" class="btn-ope video cardStaff-btn">Fill out the form</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string,
  format: string,
  imgSrc: string,
  description: string,
  adress: string,
  link?: string
}>()
</script>
<style lang="scss">
@use "./style.scss";

</style>
