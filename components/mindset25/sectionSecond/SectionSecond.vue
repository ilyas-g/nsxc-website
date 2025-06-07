<template>
    <section id="event-section">
        <div class="bg-fixed bg-layer"></div>
        <div class="container relative-content align-center">
            <div>
                <div class="event-description vertical-align-content">
                    <div class="portraits">
                        <Portrait
                        name="Dase"
                        author="Guy Simon"
                        people="dase"
                        :imgSrc="dase"
                        link="https://x.com/gsimonreal" />

                        <Portrait
                        name="Genius"
                        author="Soriya"
                        people="genius"
                        :imgSrc="genius"
                        link="https://x.com/Soriya_fr" />

                        <Portrait
                        name="Ydile"
                        author="Soriya"
                        people="ydile"
                        :imgSrc="ydile"
                        link="https://x.com/Soriya_fr" />
                    </div>
                    <div>
                        <h2 class="text-right">Définir le mindset ?</h2>
                        <p class="text-right">Une nouvelle ère démarre : l'ère du rassemblement !<br />
                            Le NSxC, soutenu par Warner Bros Games France, a le plaisir de vous annoncer:<br />
                            Le Championnat de France Mortal Kombat !</p>
                        <p class="text-right">Une aventure communautaire par la communauté et pour tous les amoureux de la licence.</p>
                        <p class="text-right text-uppercase keyword mr-4 mt-4">Focused</p>
                        <!-- <p class="text-right">A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA »,
                            ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les 
                            meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.</p> -->
                    </div>
                    <!-- <div class="portraits">
                        <img :src="ambiance" class="portrait" alt="Dase" />
                        <img :src="whitemother" class="portrait" alt="Ydile" />
                        <img :src="pap" class="portrait pap" alt="Ydile" />
                        <img :src="aerisu" class="portrait" alt="Ydile" />
                    </div> -->
                </div>

                <div class="event-description vertical-align-content">
                    <div>
                        <p>A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA »,
                            ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les 
                            meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.</p>
                    </div>


                    <div class="portraits">
                        <img :src="ambiance" class="portrait" alt="Dase" />
                        <img :src="whitemother" class="portrait" alt="Ydile" />
                        <img :src="pap" class="portrait pap" alt="Ydile" />
                        <img :src="aerisu" class="portrait" alt="Ydile" />
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
    padding: 100px 15px 320px;
    background-color: variables.$dark-color;
    
    p {
        font-size: 1.7vw;
    }

    .keyword {
        font-family: "Gotham Ultra";
        font-size: 7vw;
        margin-top: 0.85em;
        margin-right: 1em;
        color: transparent;
        -webkit-text-stroke: 1px white;
    }
    .event-description {
        display: flex;
        justify-content: space-between;
    }

    // .photo {
    //     .author {
    //         color: variables.$main-color;
    //         font-size: 12px;
    //         font-weight: bold;
    //         position: absolute;
    //         z-index: 1;

    //         &:first-of-type {
    //             top: -230px;
    //             left: 193px;
    //             transform: rotate(15deg);
    //         }
    //     }
    // }
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
        // filter: brightness(0) saturate(100%) invert(58%) sepia(82%) saturate(3628%) hue-rotate(352deg) brightness(103%) contrast(99%);
        // filter: sepia(82%) saturate(3628%) hue-rotate(352deg);
        transition: 0.3s;

        // position: absolute;
        &:hover {
            filter: sepia(0%);
            z-index: 1;
            // -webkit-box-shadow: 5px 3px 15px 5px rgba(255, 235, 191, 0.5);
            // box-shadow: 5px 3px 15px 5px rgba(255, 235, 191, 0.5);
                        box-shadow: 0 0 60px color.adjust(variables.$main-color, $lightness: 15%);

        }

        &.dase {
            transform: rotate(-20deg);
            top: -235px;
            left: 15px;
        }

        .genius {

        }

        .ydile {

        }

    }



    // .portraits:first-child .portrait {
    //     position: absolute;
    //     // margin-bottom: 230px;

    //     &:first-of-type {
    //         transform: rotate(-20deg);
    //         top: -235px;
    //         left: 15px;
    //         // padding-top: 20px;
    //     }
    //     &.genius {
    //         display: none;
    //     }
    //     &:last-of-type {
    //         transform: rotate(15deg);
    //         right: 20px;
    //         top: -310px;
    //     }
    // }

    .portraits:last-child .portrait {
        position: absolute;
        &:first-of-type {
            transform: rotate(-30deg);
            bottom: -225px;
            left: 15px;
        }
        &:nth-child(2) {
            transform: rotate(18deg);
            bottom: -195px;
            right: 15px;
        }
        &.pap {
            display: none;
        }
        &:last-of-type {
            transform: rotate(5deg);
            right: 65px;
            bottom: -350px;
        }
    }

    @media screen and (min-width: variables.$media-queries-tablet-small) {
        .portrait {
            width: 200px;
            height: 200px;
        }

        .portraits:first-child .portrait {

            &:first-of-type {
                top: -260px;
                left: 35px;
            }
            &:last-of-type {
                right: 35px;
            }
        }

        .portraits:last-child .portrait {
            position: absolute;

            &:first-of-type {
                bottom: -280px;
            }
            &:nth-child(2) {
                transform: rotate(11deg);
                bottom: -245px;
            }
            &:last-of-type {
                transform: rotate(5deg);
                right: 85px;
                bottom: -370px;
            }
        }
    }

    @media screen and (min-width: variables.$media-queries-tablet-small) {
        .portraits:first-child .portrait {
            &.genius {
                display: block;
                top: -235px;
                left: 50%;
                transform: rotate(5deg) translateX(-50%);
            }
        }
        .portraits:last-child .portrait {
            &:first-of-type {
                bottom: -230px;
            }


        }
    }

    @media screen and (min-width: variables.$media-queries-tablet) {
        .portraits:last-child .portrait {
            &.pap {
                display: block;
                transform: rotate(-6deg);
                left: 185px;
                bottom: -330px;
            }
        }
    }

    @media screen and (min-width: variables.$media-queries-desktop) {
        padding: 70px 25px 320px;
        .portraits:first-child .portrait {
            position: relative;
            top: inherit;

            &:first-of-type {
                top: inherit;
            }
        }
    }

    h2 {
        margin-bottom: 10px;
    }

    iframe {
        display: none;
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
