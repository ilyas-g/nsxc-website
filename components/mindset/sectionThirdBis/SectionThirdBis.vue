<template lang="">
    <section id="schedule-details" class="bg-cover">
    <div class="bg-layer"></div>

        <div>
            <div class="containerr relative-content">
                <div>
                    <h2 class="text-center">{{ t("gamesTitle") }}</h2>

                    <div>
                        <div class="text-center more-info">
                            <Game  :imgSrc=sf6 support="PC" format="Solo" description="Street Fighter 6 logo" :linkBtn="localePath('/mindset/rules#sf6rules')" />
                            <Game  :imgSrc=t8 support="Playstation 5 (TBC)" format="Solo" description="Tekken 8 logo" :linkBtn="localePath('/mindset/rules#t8rules')" />
                            <Game  :imgSrc=ffcotw support="Playstation 5 (TBC)" format="Solo" description="Fatal Fury: City of The Wolves logo" :linkBtn="localePath('/mindset/rules#ffcotwrules')"/>
                            <Game  :imgSrc=ggst support="Playstation 4 (TBC)" format="Solo" description="Guilty Gear Strive logo" :linkBtn="localePath('/mindset/rules#ggstrules')"/>
                            <Game  :imgSrc=gbvsr support="Playstation 4 (TBC)" format="Solo" description="Granblue Fantasy Versus: Rising logo" :linkBtn="localePath('/mindset/rules#gbvsrrules')" />
                            <Game  :imgSrc=ggxrdrev2 support="Playstation 4 (TBC)" format="Solo" description="Guilty Gear Xrd REV 2 logo" :linkBtn="localePath('/mindset/rules#ggxrdrev2rules')" />
                            <Game  :imgSrc=xko support="PC" format="Solo" description="2XKO logo" :linkBtn="localePath('/mindset/rules#2xko1v1rules')" />
                            <Game group=true :imgSrc=xko support="PC" format="Duo" description="2XKO logo" :linkBtn="localePath('/mindset/rules#2xko2v2rules')" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import AnimateImage from "../animateImage/AnimateImage.vue"

import ethernet from "~/public/img/ethernet.webp"
import drapeau from "~/public/img/drapeauFR.webp"

import sf6 from '~/public/img/games_logos/sf6.png'
import xko from '~/public/img/games_logos/2xko.png'
import xko_double from '~/public/img/games_logos/2xko-2v2.webp'
import t8 from '~/public/img/games_logos/t8.png'
import ggst from '~/public/img/games_logos/ggst.png'
import gbvsr from '~/public/img/games_logos/gbvsr.png'
import ffcotw from '~/public/img/games_logos/ffcotw.png'
import arcc from '~/public/img/arcworldtour2025-2026.webp'
import ggxrdrev2 from '~/public/img/games_logos/GGXRD-R2.png'

import Game from '~/components/mindset/game/Game.vue'

const localePath = useLocalePath()
import { useI18n, useLocalePath } from '#imports'
const { t } = useI18n()

</script>
<style lang="scss">
@use "~/assets/mindset/css/variables";

#schedule-details {
    color: #fff;
    padding: 50px 35px;
    background-color: black;
    position: relative;

    &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .5);
}
    .icon-discord-1 {
        font-size: 40px;
    }

    .containerr {
        display: flex;
        flex-direction: column;

        .order-1 {
            order: 1;
        }

        .order-2 {
            order: 2;
        }

        .order-3 {
            order: 3;
        }

        @media screen and (min-width: variables.$media-queries-desktop-xl) {

            flex-direction: row;
            align-items: center;

            .order-1,
            .order-2,
            .order-3 {
                order: unset;
            }

            &>div {
                flex: 1;
            }
        }
    }

    .online-events {
        @media screen and (min-width: variables.$media-queries-desktop-xl) {
            display: flex;
        }
    }

    .more-info {
        flex-wrap: wrap;

        @media screen and (min-width: variables.$media-queries-tablet-small) {

            display: flex;
            justify-content: center;
        }
    }

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

    .streamers {
        display: flex;
        justify-content: space-around;
    }

    .icon-discord,
    .icon-ethernet,
    .icon-flags {
        width: 48px;
    }
}

</style>
