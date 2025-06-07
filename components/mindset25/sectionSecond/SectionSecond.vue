<template>
    <section id="event-section">
        <div class="bg-fixed bg-layer"></div>
        <div class="container relative-content align-center">
            <div>
                <div class="event-description vertical-align-content">
                    <h2 class="text-right">Définir le mindset ?</h2>

                    <div class="parent">
                        <img :src="ydile" alt="Ydile" class="div1" />
                        <img :src="dase" alt="Dase" class="div2" />
                        <img :src="dase" alt="Dase" class="div3" />
                        
                        <div class="div4 ml-2">
                            <!-- <p class="text-center text-uppercase keyword  mt-4">Focused</p> -->
                            <p>Une nouvelle ère démarre : l'ère du rassemblement !<br />
                                Le NSxC, soutenu par Warner Bros Games France, a le plaisir de vous annoncer:<br />
                                Le Championnat de France Mortal Kombat !</p>
                            <p>Une aventure communautaire par la communauté et pour tous les amoureux de la licence.</p>
                        </div>

                        <div class="div5">
                            <p>
                                A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA »,
                                ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les 
                                meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.
                            </p>
                        </div>
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
        font-size: 0.778rem;
    }

    .parent {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        }
    .div1 {
        margin-top: min(13.5vw, 104px);
        grid-area: 1 / 1 / 2 / 4;
    }
    .div2 { grid-area: 1 / 4 / 2 / 7; }
    .div3 { grid-area: 2 / 1 / 3 / 2; }
    .div4 { grid-area: 2 / 1 / 3 / 3; }
    .div5 { grid-area: 3 / 1 / 4 / 2; }
    .div6 { grid-area: 3 / 2 / 4 / 3; }

    @media screen and (min-width: variables.$media-queries-tablet) {
        .div1 {
            grid-area: 1 / 4 / 2 / 5;
        }
        .div2 { grid-area: 1 / 5 / 2 / 7; }
        .div3 { grid-area: 1/ 1/ 2/ 3; margin-top: 55px; height: 150px; object-fit: cover;}
        .div4 {         grid-area: 2 / 1 / 3 / 4;
        margin-top: -135px;
        padding-right: 30px; }
        .div5 { grid-area: 3 / 1 / 4 / 4; }

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
