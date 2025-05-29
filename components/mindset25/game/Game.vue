<template>
    <div class="module-border-wrap mb-4">
    <div class="cardGame">
        <div class="cardGame-head">
            <img :src="imgSrc" :alt="description" class="inline-photo show-on-scroll is-visible" />
            <img v-if="protour!==undefined" :src="protour" alt="dedededed" class="worldtour"  tooltip="Slide to the left" flow="left"/>
        </div>
        <div class="cardGame-body">
            <p><span class="icon-gamepad"></span> {{ support }}</p>
            <p><span class="icon-user-solid"></span> {{  format }}</p>
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
  linkBtn: string
}>()
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
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
    // width: 220px;
    // width: 350px;

    &-head {
        height: 200px;
        padding: 0 20px;
        border-bottom: 1px solid rgb(78, 78, 78);
        display: grid; /* contexte sur le parent */
        place-items: center; /* alignement vertical et horizontal des enfants dans leur cellule */
        position: relative;

        img {
            width: 250px;
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
        padding: 10px 0;

        p {
            margin: initial;
            font-family: 'Gotham BlackItalic';
        }

        .btn-game {
            max-width: 300px;
            padding: 0px 15px;
            margin: 20px 15px 8px;
            display: inline-block;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: 2px solid variables.$main-color;
            // width: 100%;
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 700;
            /* padding: 10px 15px; */
            text-align: center;
            transition: all 0.5s ease 0s;

            &:hover {
              border: 2px solid variables.$second-color;
              // box-shadow: 0 0 5px variables.$main-color;
              background-color: #fff;
              color: variables.$dark-color;
            }
        }
    }
}






/* START TOOLTIP STYLES */
[tooltip] {
  position: relative; /* opinion 1 */
}

/* Applies to all tooltips */
[tooltip]::before,
[tooltip]::after {
  text-transform: none; /* opinion 2 */
  font-size: .9em; /* opinion 3 */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: '';
  border: 5px solid transparent; /* opinion 4 */
  z-index: 1001; /* absurdity 1 */
}
[tooltip]::after {
  content: attr(tooltip); /* magic! */
  
  /* most of the rest of this is opinion */
  font-family: Helvetica, sans-serif;
  text-align: center;
  
  /* 
    Let the content set the size of the tooltips 
    but this will also keep them from being obnoxious
    */
  min-width: 3em;
  max-width: 21em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1ch 1.5ch;
  border-radius: .3ch;
  box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
  background: #333;
  color: #fff;
  z-index: 1000; /* absurdity 2 */
}

/* Make the tooltips respond to hover */
[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

/* don't show empty tooltips */
[tooltip='']::before,
[tooltip='']::after {
  display: none !important;
}

/* FLOW: UP */
[tooltip]:not([flow])::before,
[tooltip][flow^="up"]::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #333;
}
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::after {
  bottom: calc(100% + 5px);
}
[tooltip]:not([flow])::before,
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::before,
[tooltip][flow^="up"]::after {
  left: 50%;
  transform: translate(-50%, -.5em);
}

/* FLOW: DOWN */
[tooltip][flow^="down"]::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #333;
}
[tooltip][flow^="down"]::after {
  top: calc(100% + 5px);
}
[tooltip][flow^="down"]::before,
[tooltip][flow^="down"]::after {
  left: 50%;
  transform: translate(-50%, .5em);
}

/* FLOW: LEFT */
[tooltip][flow^="left"]::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #333;
  left: calc(0em - 5px);
  transform: translate(-.5em, -50%);
}
[tooltip][flow^="left"]::after {
  top: 50%;
  right: calc(100% + 5px);
  transform: translate(-.5em, -50%);
}

/* FLOW: RIGHT */
[tooltip][flow^="right"]::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #333;
  right: calc(0em - 5px);
  transform: translate(.5em, -50%);
}
[tooltip][flow^="right"]::after {
  top: 50%;
  left: calc(100% + 5px);
  transform: translate(.5em, -50%);
}

/* KEYFRAMES */
@keyframes tooltips-vert {
  to {
    opacity: .9;
    transform: translate(-50%, 0);
  }
}

@keyframes tooltips-horz {
  to {
    opacity: .9;
    transform: translate(0, -50%);
  }
}

/* FX All The Things */ 
[tooltip]:not([flow]):hover::before,
[tooltip]:not([flow]):hover::after,
[tooltip][flow^="up"]:hover::before,
[tooltip][flow^="up"]:hover::after,
[tooltip][flow^="down"]:hover::before,
[tooltip][flow^="down"]:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}

[tooltip][flow^="left"]:hover::before,
[tooltip][flow^="left"]:hover::after,
[tooltip][flow^="right"]:hover::before,
[tooltip][flow^="right"]:hover::after {
  animation: tooltips-horz 300ms ease-out forwards;
}
</style>
