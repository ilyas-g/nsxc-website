<template lang="">
    <VueLenis root :options="lenisOptions" />
  <Header @toggle-contact="toggleContact(true)" />

    <main class='rulesPage'>
      <section class="mb-5">
        <h1 class='text-center'>{{ t("rulesTitle") }}</h1>

        <h2 class="anchor" id="tournamentRules">{{ t("rulesTournamentsTitle") }}</h2>
        <p>{{ t("ruleGlobal") }}</p>
        <p>{{ t("2xkoRulesChange") }}</p>

        <div class="gameSection">
          <div>
            <img :src="sf6" alt="Street Fighter 6 Logo" />
          </div>
          <div>
            <h3 id="sf6rules">Street Fighter 6</h3>
            <ul>
              <li>{{ t("SF6Platform") }}</li>
              <li>{{ t("SF6Format") }}</li>
              <li>{{ t("SF6Rounds") }}</li>
              <li>{{ t("SF6Matches") }}</li>
              <li>{{ t("SF6Timer") }}</li>
              <li>{{ t("SF6Stage") }}</li>
              <li>{{ t("SF6Condition") }}</li>
            </ul>
          </div>
        </div>

        <div class="gameSection">
          <div>
            <img :src="t8" alt="Tekken 8 Logo" />
          </div>
          <div>
            <h3 id="t8rules">Tekken 8</h3>
            <ul>
              <li>{{ t("T8Platform") }}</li>
              <li>{{ t("T8Format") }}</li>
              <li>{{ t("T8Rounds") }}</li>
              <li>{{ t("T8Matches") }} {{ t("T8Finals") }}</li>
              <li>{{ t("T8Timer") }}</li>
              <li>{{ t("T8Stage") }}</li>
              <li>{{ t("T8Condition") }}</li>
              <li>{{ t("T8RuleSet") }} <NuxtLink to="https://www.bandainamcoent.com/legal/community-events/official-rules-twt" target="_blank">Tekken World Tour 2025</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="gameSection">
          <div>
            <img :src="ggst" alt="Gulty Gear Strive Logo" />
            <img :src="arcc" alt="Arc World Tour 2026-2027" />
          </div>
          <div>
            <h3 id="ggstrules">Guilty Gear Strive</h3>
            <ul>
              <li>{{ t("GGSTPlatform") }}</li>
              <li>{{ t("GGSTFormat") }}</li>
              <li>{{ t("GGSTRounds") }}</li>
              <li>{{ t("GGSTMatches") }}</li>
              <li>{{ t("GGSTTimer") }}</li>
              <li>{{ t("GGSTCondition") }}</li>
              <li>{{ t("GGSTCharacters") }}</li>
              <li>{{ t("GGSTCharacetrsColor") }}</li>
              <li>{{ t("GGSTRuleSet") }}<NuxtLink to="https://www.arcsystemworks.jp/awt2026/assets/pdf/AWT26_27OfficialRules_EN.pdf" target="_blank">Arc World Tour 2026-2027</NuxtLink></li>
            </ul>
          </div>
        </div>


        <div class="gameSection">
          <div>
            <img :src="gbvsr" alt="Granblue Fantasy Versus: Rising Logo" />
            <!-- <img :src="arcc" alt="Arc World Tour 2026-2027" /> -->
          </div>
          <div>
            <h3 id="gbvsrrules">Granblue Fantasy Versus: Rising</h3>
            <ul>
              <li>{{ t("GBVSRPlatform") }}</li>
              <li>{{ t("GBVSRFormat") }}</li>
              <li>{{ t("GBVSRRounds") }}</li>
              <li>{{ t("GBVSRMatches") }}</li>
              <li>{{ t("GBVSRTimer") }}</li>
              <li>{{ t("GBVSRStage") }}</li>
              <li>{{ t("GBVSRCondition") }}</li>
              <li>{{ t("GBVSRMusic") }}</li>
            </ul>
          </div>
        </div>


        <div class="gameSection">
          <div>
            <img :src="marveltokon" alt="Hunter X Hunter NenXImpact Logo" />
          </div>
          <div>
            <h3 id="tokonrules">MARVEL Tōkon: Fighting Souls</h3>
            <ul>
              <li>Rules incoming soon...</li>
            </ul>
          </div>
        </div>

        <div class="gameSection">
          <div>
            <img :src="xko" alt="2XKO Logo" />
          </div>
          <div>
            <h3 id="2xko1v1rules">2XKO ({{ t("2xkoMixte") }})</h3>
            <ul>
              <!-- <li>{{ t("2xkoPlatform") }}</li> -->
              <li>{{ t("2xkoFormat") }}</li>
              <li>{{ t("2xkoMatches") }} {{ t("2xkoFinals") }}</li>
              <li>{{ t("2xkoTimer") }}</li>
              <li>{{ t("2xkoStage") }}</li>
              <li>{{ t("2xkoCondition") }}</li>
              <li>{{ t("2xkoCondition2") }}</li>
              <li>{{ t("2xkoSOCD") }}</li>
            </ul>
          </div>
        </div>

      </section>

      <aside class="sommaire">
        <div class='sticky mb-5'>
          <div>
            <p class='text-center text-uppercase title'>Sommaire</p>
            <ul>
              <li><a href="#tournamentRules">{{ t("rulesTournamentsTitle") }}</a>
                <ul>
                  <li><NuxtLink :to="localePath('/mindset/rules#sf6rules')">Street Fighter 6</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#t8rules')">Tekken 8</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#ggstrules')">Guilty Gear Strive</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#gbvsrrules')">Granblue Fantasy Versus: Rising</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#tokonrules')">MARVEL Tōkon: Fighting Souls</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#2xko1v1rules')">2XKO ({{ t("2xkoMixte") }})</NuxtLink></li>
                  <!-- <li><NuxtLink :to="localePath('/mindset/rules#2xko2v2rules')">2XKO (Duo)</NuxtLink></li> -->
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  <Footer @toggle-contact="toggleContact(true)" />
  <div v-if="isContact === true">
    <Contact mail="nsxc.pro@gmail.com" @toggle-contact="toggleContact(false)" />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/mindset/header/Header.vue'
import Footer from '~/components/mindset/footer/Footer.vue'
import Contact from '~/components/mindset/contactBlock/ContactBlock.vue'

import ArcWorldTour from '~/public/img/arcworldtour2025-2026.webp'

import sf6 from '~/public/img/games_logos/sf6.webp'
import xko from '~/public/img/games_logos/2xko.webp'
import xko_double from '~/public/img/games_logos/2xko-2v2.webp'
import t8 from '~/public/img/games_logos/t8.webp'
import ggst from '~/public/img/games_logos/ggst.webp'
import gbvsr from '~/public/img/games_logos/gbvsr.webp'
import arcc from '~/public/img/arcworldtour2026-2027.webp'
import xko_firstImpact from '~/public/img/2XKO_FirstImpactLogo_DarkBG.png'
import marveltokon from '~/public/img/games_logos/marveltokon.webp'

import { VueLenis, useLenis } from 'lenis/vue' // Also available as global imports, no need to import them manually
import { watch } from 'vue'
const localePath = useLocalePath()
import { useI18n, useLocalePath } from '#imports'
const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis)
  },
  { immediate: true }
)

const { t } = useI18n()

useSeoMeta({
  title: 'NSXC - MINDSET 25',
  ogTitle: 'NSXC - MINDSET 25',
  keywords: 'Mindset, NSXC, tournois, événement, jeux vidéo, motivation, détermination, soi, meilleur, mentalité, attitude, comportement, émotions, feeling, fihgitng games, jeux de combat, Street Fighter, Street Fighter 6, 2XKO, Riot, Tekken 8, Tekken, COTW',
  description: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogDescription: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogImage: '/img/seo-screen.webp',
  twitterTitle: 'NSXC - MINDSET 25',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://nsxc.gg/img/seo-screen.webp',
  twitterSite: '@_NSxC',
  twitterCreator: '@iamarktall',
  twitterDescription: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.'
})

const isContact = ref(false);
const toggleContact = (toggleValue: boolean) => {
  isContact.value = toggleValue;
  console.log("vraiaiaiai");
  
};
</script>
<style lang="scss">
@use "~/assets/mindset/css/variables";
@use '~/assets/mindset/css/section';
@use "sass:color";
@import url("~/assets/mindset/css/index.css");

.rulesPage {
    color: white;
    background-color: variables.$dark-color;
    display: flex;

    .gameSection {
      // display: flex;
      // justify-content: space-between;
      // align-items: center;

      margin-bottom: 130px;

      div:first-child {
        // display: flex;

        // img {
        //   height: 150px;
        // }
      }

        @media screen and (min-width: variables.$media-queries-desktop) {
          display: flex;
          justify-content: space-between;
          align-items: center;

          & div:first-child{
            display: block;
            order: 2;

            img {
              margin-bottom: 25px;
            }
          }
        }
    }

    img {
      width: 100%;
      margin-bottom: 15px;

      @media screen and (min-height: variables.$media-queries-tablet) {
        width: 300px;
        margin: auto;
        display: block;
      }
    }

    section {
        padding: 50px 50px 0;
        order: 2;
        width: fit-content;
    }

    h1 {
        margin-top: 0.83em;
        font-size: 2.6em;

        @media screen and (min-width: variables.$media-queries-tablet-small) {
          font-size: 3.2em
        }
    }

    h2 {
        margin-top: 0.83em;
        margin-bottom: 20px;

        @media screen and (min-width: variables.$media-queries-mobile) {
          font-size: 38px;
        }

        @media screen and (min-width: variables.$media-queries-tablet-small) {
          font-size: 48px
        }
    }

    h3 {
        margin-top: 1em;
    }

    ul li::before {
        content: "▪";
        color: variables.$main-color;
        padding-right: 10px;
    }

    table {
        color: white;

        th {
            background-color: variables.$main-color;
        }
    }

    a {
      color: variables.$link-color;

      &:hover {
          color: variables.$main-color;
      }
    }

    .sommaire {
        display: none;

        a {
          color: variables.$white;

          &:hover {
            color: variables.$main-color;
          }
        }

        @media screen and (min-width: variables.$media-queries-desktop) {
            display: block;
            background-color: rgba(0, 0, 0, 0.7);
            position: relative;
            order: 1;

            .title {
                font-size: 35px;
                font-weight: 700;
            }

            p {
                margin-bottom: 10px;
            }


            ul li {
                font-size: 14px;

                @media screen and (min-width: variables.$media-queries-desktop-xl) {
                    font-size: 16px;
                }

                @media screen and (min-height: 540px) {
                    font-size: 14px;
                }

                @media screen and (min-height: variables.$media-queries-tablet) {
                    font-size: 16px;
                }

                ul li {
                    padding-left: 13px;
                }
            }
        }
    }

    .sticky {
        position: sticky;
        padding: 0 15px;
        top: 70px;
    }

    [id]::before {
        content: '';
        display: block;
        height: 75px;
        margin-top: -75px;
        visibility: hidden;
    }

    .gameRules {
      display: flex;
      margin: 30px 0;
      justify-content: space-between;

      img {
        order: 2
      }
    }
}
</style>

