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
                        <div class="div3">

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
                            }"/>

                        </div>
                        <div class="div7">
                            <p>{{ t("whyMindsetDescThird") }}</p>

                            <p>{{ t("whyMindsetDescFourth") }}</p>
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
                            width: width50
                        }"></div>

                        <div class="div11">
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
import videoLoop from '~/public/img/mindsetloop.mp4'

import dase from '~/public/img/dase.webp'
import ydile from '~/public/img/idile.webp'
import whitemother from '~/public/img/whitemother.webp'
import ark from '~/public/img/ark.webp'
import ambiance from '~/public/img/ambiance.webp'
import aerisu from '~/public/img/aerisu.webp'
import dad from '~/public/img/dad.webp'
import tpk from '~/public/img/tpk.jfif'

const { t } = useI18n()
const width100 = "100%"
const width50 = "50%"
</script>
<style lang="scss">
@use "./style.scss";

</style>
