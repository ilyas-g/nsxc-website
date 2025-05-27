<template lang="">
    <footer id="footer">
        <div>
            <div class="container">

                <ul class="footer-nav mb-4">
                    <!-- <li><a href="/#event-section">{{ t("inscription") }}</a>
                    </li> -->
                    <!-- <li><a href="/#schedule">Étapes</a>
                    </li>
                    <li><a href="/#tournaments">Tournois</a>
                    </li> -->
                    <li @click="$emit('toggleContact')">Contact</li>
                    <!-- <li @click="$emit('toggleClassement')">Classement</li> -->
                </ul>

                <div>
                    <div class="follow-us">
                        <h4 class="text-center">Suivez NSXC</h4>
                        <p class="text-center">
                            <a href="https://discord.gg/d2jgxxyZg3" target="_blank" class="ml-1 mr-1" aria-label="Discord Mindset"><span class="icon-discord-1"></span></a>
                            <a href="https://twitter.com/_NSxC" target="_blank" class="ml-1 mr-1" aria-label="Twitter NSxC"><span class="icon-x"></span></a>
                            <a href="https://www.instagram.com/__nsxc" target="_blank" class="ml-1 mr-1" aria-label="Instagram NSxC"><span class="icon-instagram"></span></a>
                            <a href="https://www.twitch.tv/nsxc_tv" target="_blank" class="ml-1 mr-1" aria-label="Twitcch NSxC"><span class="icon-twitch-1"></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-credits">
            MINDSET © <a href="#" target="_blank">NSXC</a> - 
            Site conçu et réalisé par <a href="https://twitter.com/iamarktall" target="_blank">Arktall
                (@iamarktall)</a>
        </div>
    </footer>
</template>
<script setup lang="ts">
// // import { useI18n } from 'vue-i18n'

import { RouterLink, RouterView } from 'vue-router'
import NSXCLogo from '~/public/img/NSXC_BLANC2.webp'

const { t } = useI18n()
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";

#footer {
    color: #fff;
    padding: 50px 20px;
    border-top: 30px solid variables.$main-color-hover;
    background: url("~/public/img/00663.webp") no-repeat #000 fixed;
    background-size: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    display: block;

    .h4,
    h4 {
        font-size: 1.2rem;

        @media screen and (min-width: variables.$media-queries-tablet) {

            font-size: 1.5rem;
        }
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }
    }

    .footer-nav {
        font-size: 24px;
        text-transform: uppercase;


        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            margin-bottom: 0;
            padding: 0 15px;

            &:hover {
                cursor: pointer;
                color: #d99a2b;
            }
        }

        @media screen and (min-width: variables.$media-queries-tablet) {
            display: unset;

            li {
                margin-bottom: 10px;
            }
        }
    }

    .follow-us {
        img {
            width: 180px;
        }

        span {
            font-size: 48px;
            display: inline-block;
            margin-right: 10px;
        }
    }

    .footer-credits {
        margin: 30px auto 0;
        padding: 15px;
        text-align: center;
        border-top: 1px solid #fff;
        font-size: 18px;

        a {
            color: #d99a2b;
        }
    }
}

</style>
