<template>
    <div class="photo">
        <img :src="imgSrc" class="portrait" :class="people" :alt="name" />
        <NuxtLink :to="link" target="_blank" class="author"><span>&copy; {{ author }}</span></NuxtLink>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  name: string,
  people: string,
  author: string,
  imgSrc: string,
  link: string
}>()
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
@use "sass:color";

.author {
    color: variables.$main-color;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    // left: 0;
    // right: 0;
    // bottom: 0;
    z-index: 1;
}

.portrait {
    width: 160px;
    height: 160px;
    -o-object-fit: cover;
    object-fit: cover;
    // background-color: white;
    background: linear-gradient(to bottom, rgb(255, 139, 61), rgb(201, 201, 201), rgb(167, 52, 255));
    padding: 3px;
    border-radius: 10px;
    margin: 10px 0;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
    filter: sepia(60%);
    transition: 0.3s;

    &:hover {
        filter: sepia(0%);
        z-index: 1;
        box-shadow: 0 0 60px color.adjust(variables.$main-color, $lightness: 15%);

    }
}

</style>
