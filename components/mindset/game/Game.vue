<template>
    <div class="module-border-wrap mb-4">
    <div class="cardGame">
        <div class="cardGame-head">
            <img :src="imgSrc" :alt="description" class="inline-photo show-on-scroll is-visible" />
            <img v-if="protour!==undefined" :src="protour" alt="Pro Tour" class="worldtour"  tooltip="Slide to the left" flow="left"/>
        </div>
        <div class="cardGame-body">
            <p><span class="icon-gamepad"></span> {{ support }}</p>
            <p v-if="group===false">
              <span class="icon-user-solid"></span> {{ format }}
            </p>
            <p v-else>
              <span class="icon-user-solid"></span> 
              <span class="icon-user-solid"></span> {{ format }}
            </p>
            <NuxtLink :to="linkBtn" target="_blank" class="btn-game mx-auto">{{ t("moreInformations") }}</NuxtLink>
        </div>
    </div></div>
</template>
<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  support: string,
  format: string,
  imgSrc: string,
  description: string,
  protour?: string,
  linkBtn: string,
  icon: string,
  group?: boolean
}>()

</script>
<style lang="scss">
@use "~/assets/mindset/css/variables";
@use "sass:color";

.module-border-wrap {
  background: linear-gradient(to bottom, color.adjust(variables.$main-color, $lightness: -30%), color.adjust(variables.$dark-color, $lightness: 9%), color.adjust(variables.$second-color, $lightness: -30%));
  border-radius: 5px;
  padding: 2px;

  @media screen and (min-width: variables.$media-queries-tablet) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}
.cardGame {
    background-color: variables.$dark-color;
    border-radius: 5px;

    &-head {
        height: 200px;
        padding: 0 20px;
        border-bottom: 1px solid rgb(78, 78, 78);
        display: grid; /* contexte sur le parent */
        place-items: center; /* alignement vertical et horizontal des enfants dans leur cellule */
        position: relative;

        img {
            width: 100%;

            @media screen and (min-width: variables.$media-queries-mobile) {
                max-width: 250px;
            }
        }

        .worldtour {
            height: 50px;
            width: initial;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }

    &-body {
        text-transform: uppercase;
        line-height: 2;
        padding: 10px 15px;

        p {
            margin: initial;
            font-family: 'Gotham Black Italic';
        }

        .btn-game {
            max-width: 300px;
            padding: 0px 15px;
            margin: 20px 15px 8px;
            display: inline-block;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: 2px solid variables.$main-color;
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 700;
            text-align: center;
            transition: all 0.5s ease 0s;

            &:hover {
              border: 2px solid variables.$second-color;
              background-color: #fff;
              color: variables.$dark-color;
            }
        }
    }
}
</style>
