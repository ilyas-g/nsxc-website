<template>
    <section id="event-section">
        <div class="bg-fixed bg-layer"></div>
        <div class="container relative-content align-center">
            <div>
                <div class="event-description vertical-align-content">
                    <h2 class="text-right">Définir le mindset ?</h2>

                    <div class="parent">
                        <img :src="ydile" alt="Ydile" class="div1" />
                        <img :src="whitemother" alt="Whiteblack et sa mère" class="div1"
                        v-gsap.to="{
                            scrollTrigger: {
                            trigger: '.event-description',
                            start: '100vh 700px',
                            end: '200vh 550px',
                            scrub: true,
                            markers: false,
                            },
                            opacity: 0,
                        }"/>

                        <img :src="dase" alt="Dase" class="div2" />
                         <div class="div2">
                        <img 
                        :src="pap" 
                        alt="Pap" 
                        class="pap" 
                        v-gsap.to="{
                            scrollTrigger: {
                            trigger: '.event-description',
                            start: '200vh 700px',
                            end: '300vh 550px',
                            scrub: true,
                            markers: false,

                            },
                            opacity: 1,
                            x: -1000
                        }"/>
                        </div>
                        <div class="div3">
                            <!-- <p class="text-center text-uppercase keyword  mt-4">Focused</p> -->
                            <img :src="aerisu" alt="Dase" />
                            <p>Une nouvelle ère démarre : l'ère du rassemblement !<br />
                                Le NSxC, soutenu par Warner Bros Games France, a le plaisir de vous annoncer:<br />
                                Le Championnat de France Mortal Kombat !</p>
                            
                        </div>

                        <div class="div4">
                            <p>Une aventure communautaire par la communauté et pour tous les amoureux de la licence.</p>
                            <p>
                                A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA »,
                                ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les 
                                meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.
                            </p>
                        <NuxtLink to="https://www.start.gg/tournament/mindset-2024/details" class="btn-ope btf-btn" target="_blank">{{ t("joinDiscord") }} <span class="icon-discord-1"></span></NuxtLink>

                        </div>

                        <img :src="ambiance" alt="Dase" class="div5" />
                        <div class="rouge"></div>

                    </div>

                </div>
            </div>
        </div>
        <div class="bg-gradient-transparent bg-layer"></div>
    </section>
</template>
<script setup lang="ts">
import Portrait from '~/components/mindset25/portrait/Portrait.vue'

import dase from '~/public/img/dase.jpg'
import ydile from '~/public/img/idile.jpg'
import whitemother from '~/public/img/whitemother.jpg'
import ambiance from '~/public/img/ambiance.jpg'
import aerisu from '~/public/img/aerisu.jpg'
import genius from '~/public/img/norman.jpg'
import pap from '~/public/img/pap.jpg'

const { t } = useI18n()
const width100 = "100%"
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
@use "sass:color";

#event-section {
    position: relative;
    color: #fff;
    padding: 100px 15px;
    background-color: variables.$dark-color;
    
    img {
        width: 100%;
        height: 285px;
        object-fit: cover;
    }
    p {
        font-size: 1.2rem;
    }

    .rouge {
        background-color: #9321ef78;
        grid-area: 1/2/3/3;
        width: 50%;
    }

    .pap {
        opacity: 0;
        width: 100%;
        position: absolute;
        grid-area: 1 / 4 / 1 / 7;
        right: -1000px;
    }

    .ydile {
        opacity: 0;
    }

    .btn-ope {
        max-width: 320px;
    transition: all 0.5s ease 0s;
        &:hover {
            background-color: #fff;
            color: #0a0a0a;

            span {
                color: black;
                margin-left: 10px
            }
        }
    }
    .parent {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        }

    .div1 { grid-area: 1 / 1 / 1 / 4; margin-top: 46px; }
    .div2 {
        grid-area: 1 / 4 / 1 / 7;
        position: relative;
        overflow-x: hidden;
    }

    @media screen and (max-width: variables.$media-queries-tablet-small) {

        .div1, .div2 {
            width: 100%;
            height: 525px;
        }
    }

    .div3 {
        grid-area: 2 / 1 / 2 / 7;

        img {
        height: 190px;
        margin: -74px 0 15px 10px;
        }
    }
.div4 { grid-column-start: 1; grid-column-end: 7; }
.div5 { grid-area: 3 / 1 / 7 / 7; }
.div6 { grid-area: 5 / 1 / 8 / 3; }

    @media screen and (min-width: variables.$media-queries-tablet) {
        .div1 {
            grid-area: 1 / 4 / 2 / 5;
        }
        .div2, .pap { grid-area: 1 / 5 / 2 / 7; height: 285px;}
        .div3 { grid-area: 1/ 1/ 2/ 3; margin-top: 55px; height: 150px; object-fit: cover; margin-left: 30px;}
        .div4 {
            grid-area: 2/4/2/7; 
            margin-top: 30px;
            margin-left: 20px;
            padding-right: 10px;
        }
        .div5 {
            grid-area: 2 / 1 / 2 / 4;
            margin-top: 50px;
            margin-left: -15px;
        }

    }

    .keyword {
        font-family: "Gotham Ultra";
        font-size: 2.5rem;
        margin-top: 0.85em;
        margin-right: 1em;
        color: transparent;
        -webkit-text-stroke: 1px white;
    }

    h2 {
        margin-bottom: 10px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }

        @media screen and (min-width: variables.$media-queries-desktop-xl) {
            iframe {
                display: block;
            }
        }
    }

    .align-center {
        align-items: center
    }
}

</style>
