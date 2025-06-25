<template>
    <section id="event-section">
        <div class="bg-fixed bg-layer"></div>
        <div class="container relative-content align-center">
            <div>
                <div class="event-description vertical-align-content">
                    
                    <div class="parent">
                        <div class="div1">
                            <h2>{{ t("whyMindset") }}</h2>
                        </div>

                        <div class="div2">
                            <img :src="aerisu" alt="Dase" />
                            <img :src="dase" class="daseTest" alt="Dase" 
                                v-gsap.to="{
                                scrollTrigger: {
                                    trigger: '.event-description',
                                    start: '100vh 700px',
                                    end: '700vh 550px',
                                    scrub: true,
                                    markers: false,
                                },
                                opacity: 0,
                            }"/>
                        </div>
                        <!-- <img :src="whitemother" alt="Dase" class="div2" />
                        <div class="div2">
                        <img 
                        :src="dad" 
                        alt="Pap" 
                        class="pap" 
                        v-gsap.to="{
                            scrollTrigger: {
                            trigger: '.event-description',
                            start: '100vh 700px',
                            end: '700vh 550px',
                            scrub: true,
                            markers: false,

                            },
                            opacity: 1,
                            x: -1000
                        }"/>
                        </div> -->
                        <div class="div3">
                            <!-- <p class="text-center text-uppercase keyword  mt-4">Focused</p> -->

                            <p>{{ t("whyMindsetDescFirst") }}<br />{{ t("whyMindsetDescSecond") }}</p>
                        </div>

                        <div class="div5">
                            <img :src="ydile" alt="Ydile" />
                            <img :src="tpk" alt="TPK" class="tpk"
                            v-gsap.to="{
                                scrollTrigger: {
                                    trigger: '.event-description',
                                    start: '280vh 700px',
                                    end: '700vh 550px',
                                    scrub: true,
                                    markers: false,
                                },
                                opacity: 0,
                            }"/>
                        </div>

                        <div class="div6">
                            <img :src="ark" alt="Arktall" />
                        </div>
                        <div class="div4 rouge"
                            v-gsap.to="{
                            scrollTrigger: {
                                trigger: '.event-description',
                                start: '100vh 700px',
                                end: '700vh 550px',
                                scrub: true,
                                markers: false,
                            },
                            width: width100
                        }"></div>
                        <div class="div8">
                            <img 
                            :src="dad" 
                            alt="Whiteblack" 
                            class="pap" />
                            <img :src="whitemother" alt="Whiebl4ck" class="mother"
                            v-gsap.to="{
                                scrollTrigger: {
                                trigger: '.event-description',
                                start: '500vh 700px',
                                end: '1220vh 550px',
                                scrub: true,
                                markers: false,

                                },
                            x: -1000,
                                // opacity: 1,
                                // width: 0
                            }"/>

                        </div>
                        <div class="div7">
                            <p>{{ t("whyMindsetDescThird") }}</p>

                            <p>{{ t("whyMindsetDescFourth") }}</p>
                            <!-- <NuxtLink to="https://www.start.gg/tournament/mindset-2024/details" class="btn-ope btf-btn" target="_blank">{{ t("joinDiscord") }} <span class="icon-discord-1"></span></NuxtLink> -->
                        </div>

                        <div class="div9">
                            <img :src="ambiance" alt="Dase" />
                        </div>

                        <div class="rouge div10"
                        v-gsap.to="{
                            scrollTrigger: {
                            trigger: '.event-description',
                            start: '870vh 1000px',
                            end: '1500vh 750px',
                            scrub: true,
                            markers: false,

                            },
                            // opacity: 1,
                            // x: -1000
                            width: width50
                        }"></div>

                        <div class="div11">
                            <!-- <img :src="smile" alt="Smile" /> -->
                            <video :src="videoLoop" autoPlay loop muted />

                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="bg-gradient-transparent bg-layer"></div>
    </section>
</template>
<script setup lang="ts">
import Portrait from '~/components/mindset/portrait/Portrait.vue'
import videoLoop from '~/public/img/mindsetloop.mp4'

import dase from '~/public/img/dase.jpg'
import ydile from '~/public/img/idile.jpg'
import whitemother from '~/public/img/whitemother.jpg'
import ark from '~/public/img/ark.jpg'
import ambiance from '~/public/img/ambiance.jpg'
import aerisu from '~/public/img/aerisu.jpg'
import dad from '~/public/img/dad.webp'
import pap from '~/public/img/pap.jpg'
import tpk from '~/public/img/tpk.jfif'
import smile from '~/public/img/smile.jpg'

const { t } = useI18n()
const width100 = "100%"
const width50 = "50%"
</script>
<style lang="scss">
@use "~/assets/mindset/css/variables";
@use "sass:color";

#event-section {
    position: relative;
    color: #fff;
    // padding: 100px 15px;
    // padding: 70px 0 100px 30px;
    // padding: 70px 0 0 30px;
    padding: 70px 0 0;
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
        width: 0;
        mix-blend-mode: difference;
        z-index: 1;
    }

    .mother {
        // width: 100%;
        // overflow: hidden;
    }

    .pap {
        // opacity: 0;
        width: 100%;
        object-position: 0 -150px;
        // right: -1000px;
    }

    .ydile {
        opacity: 0;
    }

    .tpk {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.5);
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


        div {
            position: relative;

            img {
                position: absolute;
            }
        }

        h2 {
            padding: 0 30px;
        }

        p {
            padding: 0 30px;
        }
    }

    .div4, .div10 {
        display: none;
    }
    .tpk {
        display: none;
    }
    .div3, .div7 {
        p:first-child {
            margin-top: -50px;
        }
    }

.parent {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 2fr 1fr repeat(6, 2fr) repeat(2, 1fr) 2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 3 / 1 / 4 / 2; }
.div4 { grid-area: 1 / 1 / 5 / 2; }
.div5 { grid-area: 4 / 1 / 4 / 2; }
.div6 { grid-area: 5 / 1 / 5 / 2; }
.div7 { grid-area: 7 / 1 / 8 / 2; }
.div8 { grid-area: 6 / 1 / 7 / 2; }
.div9 { grid-area: 8 / 1 / 11 / 2; }
.div10 { grid-area: 1 / 1 / 1 / 2; }
.div11 { grid-area: 9 / 1 / 13 / 2; }
    @media screen and (min-width: variables.$media-queries-tablet-small) {

            .parent {
        display: grid;
        grid-template-columns: repeat(22, 1fr);
        grid-template-rows: 1fr repeat(4, 2fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;}
    .div1 { grid-area: 1 / 1 / 2 / 19; }
    .div2 { grid-area: 2 / 1 / 3 / 8; }
    .div3 { 
        grid-area: 3 / 1 / 4 / 8;

        p {
            margin: 0;
            padding-right: 20px;
            position: relative;
            z-index: 2;
        }
    }
    .div4 { grid-area: 2 / 4 / 5 / 10; margin-top: 50px; }
    .div5 {
        grid-area: 2 / 12 / 4 / 16;

        img {
            top: 5.5vh;
        }
    }
    .div6 { grid-area: 3 / 8 / 5 / 12;
        img {
            height: 670px;
            object-fit: cover;
            object-position: -24vw -160px;
            position: static !important;
            margin-top: 50px;
        }
    }

    .div7 { grid-area: 3 / 13 / 5 / 22; margin-top: 230px; }
    .div8 { grid-area: 3 / 16 / 4 / 23; overflow-x: hidden; margin-top: -15vh;}
    .div9 { grid-area: 4 / 13 / 6 / 23; margin-top: 150px;}
    .div10 {
        grid-area: 4 / 15 / 5 / 19;
        margin-top: 10vh;
        margin-bottom: -25vh;
    }

    .div11 {
        grid-area: 5/1/5/9;
        margin-left: -30px;
        margin-top: -120px;
        // overflow:hidden;

        // img {
        // height: 350px;
        // // -o-object-position: -3.5vw;
        // object-position: -7vw -11px;
        // // transform: scale(1.5);
        // }

            video {
                width: 100%;
                height: 350px;
            }
        }
    }
//     .parent {
//         display: grid;
//         grid-template-columns: repeat(6, 1fr); 
//         grid-template-rows: repeat(3, 1fr);
//         grid-column-gap: 0px;
//         grid-row-gap: 0px;
//     }

//     .div1 { grid-area: 1 / 1 / 1 / 4; margin-top: 46px;
    
//         &.tpk {
//             -ms-transform: scale(1.5); /* IE 9 */
//             -webkit-transform: scale(1.5); /* Safari 3-8 */
//             transform: scale(1.5);
//         }
//     }
//     .div2 {
//         grid-area: 1 / 4 / 1 / 7;
//         position: relative;
//         overflow-x: hidden;
//     }

//     @media screen and (max-width: variables.$media-queries-tablet-small) {

//         .div1, .div2 {
//             width: 100%;
//             height: 525px;
//         }
//     }

//     .div3 {
//         grid-area: 2 / 1 / 2 / 7;

//         img {
//         height: 250px;
//         margin: -74px 0 15px 10px;

//         &.daseTest {
//             margin-top: -301px !important;
//         }
//         }
//     }
// .div4 { grid-column-start: 1; grid-column-end: 7; }
// .div5 { grid-area: 3 / 1 / 7 / 7; }
// // .div6 { grid-area: 5 / 1 / 8 / 3; }
// .div6 {
//     position: absolute;
//     bottom: 120px;
//     width: 50%;
//     right: 0;
// }

//     @media screen and (min-width: variables.$media-queries-tablet) {
//         .div1 {
//             grid-area: 1 / 4 / 2 / 5;
//         }
//         .div2, .pap { grid-area: 1 / 5 / 2 / 7; height: 285px;}
//         .div3 { grid-area: 1/ 1/ 2/ 3; margin-top: 55px; height: 150px; object-fit: cover; margin-left: 30px;}
//         .div4 {
//             grid-area: 2/4/2/7; 
//             margin-top: 30px;
//             margin-left: 20px;
//             padding-right: 10px;
//         }
//         .div5 {
//             grid-area: 2 / 3 / 2 / 4;
//             width: 250px;
//             margin-top: 50px;
//             margin-left: -15px;
//         }
//     }

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
