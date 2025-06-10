<template>
    <section id="home-section" class="bg-fixed bg-cover dark-section">
        <video :src="videoBg" autoPlay loop muted />
        <div class="content-video">
            <div class="bg-overlay bg-layer"></div>
            <div class="home-content">
                <div>
                    <div id="ope-logo" class="mb-4">
                        <img :src="mindsetLogo" alt="Logo Mindset" />
                    </div>
                    <br>
                    <div class="home-event-date">
                        {{ t("datesEvent") }}
                    </div>
                    <div class="home-event-buttons">
                        <!-- <a href="/#event-section" class="btn-ope">{{ t("watchTrailer") }}</a> -->
                        <!-- <button class="btn-ope video btf-btn">{{ t("inscription") }}</button> -->
                        <NuxtLink to="https://www.start.gg/tournament/mindset-2024/details" class="btn-ope video btf-btn" target="_blank">{{ t("inscription") }}</NuxtLink>
                        <!-- <a href="/#tournaments" class="btn-ope special">Inscription <span class="icon-chevron-down-solid-1" aria-hidden="true"></span></a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
// import { useI18n } from 'vue-i18n'

import mindsetLogo from '~/public/img/mindset-logo.webp'
import videoBg from '~/public/img/mindsetvideov3.mp4'

const { t } = useI18n()
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
@use "sass:color";

#home-section {
    // background-image: url('~/public/img/001.jpg');
    // background-image: url('https://img.freepik.com/photos-premium/fond-abstrait-vague-blanche-fond-ecran-graphique-blanc-minimal-illustration-2d_67092-1294.jpg?w=2000');
    overflow: hidden;

    // .bg-layer {
    //     height: 98%;
    // }
}

.bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
}
.dark-section {
    background-color: #000;
    color: #fff;
}

.home-content {
    max-width: 750px;
    margin: auto;
    padding: 0 15px;
    z-index: 10;
    position: relative;
    text-align: center;

    .content {
        position: absolute;
        top: 50%;
        transform: translateY(50%);
    }
}

#ope-logo {
    img {
        display: block;
        margin: 0 auto;
        max-width: 650px;
        width: 100%;
    }
}

.home-content #ope-logo img {
    transition: all 2s ease 1s;
}

.home-event-date {
    font-size: 46px;
    text-transform: uppercase;
    margin-bottom: 15px;
    position: relative;
    text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, .8);

    // &::after,
    // &::before {
    //     content: "";
    //     display: block;
    //     height: 1px;
    //     background: #fff;
    //     width: 150px;
    //     position: absolute;
    //     top: 50%;
    //     margin-top: -1px;
    // }

    // &::before {
    //     left: -50px;
    //     background: linear-gradient(to left, #fff 0, rgba(255, 255, 255, 0) 100%);
    // }

    // &::after {
    //     right: -50px;
    //     background: linear-gradient(to right, #fff 0, rgba(255, 255, 255, 0) 100%);
    // }
}

.home-event-address {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 30px;

    @media only screen and (max-width: variables.$media-queries-tablet) {
        margin-bottom: 10px;

    }
}

.home-event-buttons {

    @media only screen and (max-width: variables.$media-queries-tablet) {
        display: flex;
        flex-wrap: wrap;

        a {
            margin: 0 auto 20px;
            display: block;
        }
    }

    @media only screen and (max-width: variables.$media-queries-desktop) {
        display: block;
    }
}

.btn-ope {
    display: inline-block;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    border: 3px solid variables.$main-color;

    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    padding: 10px 15px;
    text-align: center;
    transition: all .25s ease 0s;

    @media only screen and (min-width: variables.$media-queries-desktop) {
        max-width: 300px;
        width: 100%;
    }

    &:active,
    &:focus,
    &:hover {
        border: 3px solid variables.$main-color-hover;
        color: #fff;
    }

    span {
        display: inline-block;
        width: 1px;
        overflow: hidden;
        opacity: 0;
        color: #fff;
        transition: all .25s ease 0s;
        font-size: 17px;
    }

    &:hover span {
        margin-left: 15px;
        opacity: 1;
        width: auto;
    }

    &.special {
        background-color: variables.$main-color;

        &:active,
        &:focus,
        &:hover {
            background-color: variables.$main-color-hover;
        }
    }

    &.video {
        background: linear-gradient(90deg, 
        color.adjust(variables.$main-color, $lightness: -25%) 10%, 
        color.adjust(variables.$main-color, $lightness: 0%) 48%, 
        color.adjust(variables.$main-color, $lightness: 0%) 52%, 
        color.adjust(variables.$main-color, $lightness: -25%) 90%);
        border: 3px solid #fff5e1;
        border-radius: 0%;
        padding: 0.6em 1em;
        font-family: "Gotham Narrow Medium";
        text-shadow: 1px 1px 2px black;
        &:active,
        &:focus,
        &:hover {
            cursor: pointer;
            // max-width: 310px;
            // padding: 19px;
            color: #fff;
            box-shadow: 0 0 60px color.adjust(variables.$main-color, $lightness: 15%);
        }
    }

}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}

video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.content-video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
}

// padding: 0.6em 1.2em;
// hover : padding 15

</style>
