<template lang="">
    <VueLenis root :options="lenisOptions" />
  <Header @toggle-contact="toggleContact(true)" />

    <main class='rulesPage'>
      <section class="mb-5">
        <h1 class='text-center'>{{ t("rulesTitle") }}</h1>

        <h2 class="anchor" id="tournamentRules">{{ t("rulesTournamentsTitle") }}</h2>
        <p>Les tournois sont ouverts aux personnes âgées de dix-huit (18) ans révolus ou plus à la date de leur inscription à un tournoi. Les tournois en ligne et hors ligne sont réservés exclusivement aux résidents français.
        </p>


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

        <h3 id="t8rules">Tekken 8</h3>

        <ul>
          <li>{{ t("T8RuleSet") }} <NuxtLink to="https://www.bandainamcoent.com/legal/community-events/official-rules-twt" target="_blank">https://www.bandainamcoent.com/legal/community-events/official-rules-twt</NuxtLink></li>
          <li>{{ t("T8Format") }}</li>
          <li>{{ t("T8Rounds") }}</li>
          <li>{{ t("T8Matches") }}</li>
          <li>{{ t("T8Finals") }}</li>
          <li>{{ t("T8Timer") }}</li>
          <li>{{ t("T8Stage") }}</li>
        </ul>

        <img :src="ArcWorldTour" alt="Logo Mortal Kombat 1" />
        <h3 id="ggstrules">Guilty Gear Strive</h3>

        <ul>
          <li>{{ t("GGSTRuleSet") }} <NuxtLink to="https://www.arcsystemworks.asia/awt2025/pdf/AWT25_26rules_ENG_FIX.pdf" target="_blank">https://www.arcsystemworks.asia/awt2025/pdf/AWT25_26rules_ENG_FIX.pdf</NuxtLink></li>
          <li>{{ t("GGSTFormat") }}</li>
          <li>{{ t("GGSTRounds") }}</li>
          <li>{{ t("GGSTMatches") }}</li>
          <li>{{ t("GGSTTimer") }}</li>
          <li>{{ t("GGSTStage") }}</li>
          <li>{{ t("GGSTCharacters") }}</li>
          <li>{{ t("GGSTCharacetrsColor") }}</li>
        </ul>

        <h3 id="gbvsrrules">Granblue Fantasy Versus: Rising</h3>

        <ul>
          <li>{{ t("GBVSRRuleSet") }} <NuxtLink to="https://www.arcsystemworks.asia/awt2025/pdf/AWT25_26rules_ENG_FIX.pdf" target="_blank">https://www.arcsystemworks.asia/awt2025/pdf/AWT25_26rules_ENG_FIX.pdf</NuxtLink></li>
          <li>{{ t("GBVSRFormat") }}</li>
          <li>{{ t("GBVSRRounds") }}</li>
          <li>{{ t("GBVSRMatches") }}</li>
          <li>{{ t("GBVSRTimer") }}</li>
          <li>{{ t("GBVSRStage") }}</li>
          <li>{{ t("GBVSRMusic") }}</li>
          <li>{{ t("GBVSRCondition") }}</li>
        </ul>

        <h3 id="ffcotwrules">Fatal Fury: City of the Wolves</h3>

        <ul>
          <li>{{ t("FFCOTWFormat") }}</li>
          <li>{{ t("FFCOTWRounds") }}</li>
          <li>{{ t("FFCOTWMatches") }}</li>
          <li>{{ t("FFCOTWTimer") }}</li>
          <li>{{ t("FFCOTWStage") }}</li>
        </ul>

        <h3 id="ggxrdrev2rules">Guilty Gear Xrd REV2</h3>

        <ul>
          <li>{{ t("GGXRDREV2Format") }}</li>
          <li>{{ t("GGXRDREV2Rounds") }}</li>
          <li>{{ t("GGXRDREV2Matches") }}</li>
          <li>{{ t("GGXRDREV2Timer") }}</li>
          <li>{{ t("GGXRDREV2Stage") }}</li>
        </ul>

        <h3 id="2xko1v1rules">2XKO (1V1)</h3>
        <p>{{ t("2xkoComingSoon") }}</p>

        <h3 id="2xko2v2rules" >2XKO (2V2)</h3>
        <p>{{ t("2xkoComingSoon") }}</p>
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
                  <li><NuxtLink :to="localePath('/mindset/rules#ffcotwrules')">Fatal Fury: City of The Wolves</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#ggxrdrev2rules')">Guilty Gear Xrd REV 2</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#2xko1v1rules')">2XKO (1V1)</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/mindset/rules#2xko2v2rules')">2XKO (2V2)</NuxtLink></li>
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
  title: 'NSXC - Rules of the MINDSET 25',
  ogTitle: 'NSXC - Rules of the MINDSET 25',
  description: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogDescription: 'Mindset was born in 2024 with the desire to make its contribution in an ecosystem where esport is taking more and more place; bring a vision that invites introspection and consider its place within this community.',
  ogImage: '~/public/img/seo-screen.webp',
  twitterTitle: 'NSXC - MINDSET 25',
  twitterImage: '~/public/img/seo-screen.webp',
  twitterCard: 'summary_large_image',
  twitterImageAlt: 'NSXC - Rules of the MINDSET 25'
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
@import url("~/assets/mindset/css/index.css");

.rulesPage {
    color: white;
    background-color: variables.$dark-color;
    display: flex;

    section {
        padding: 50px 50px 0;
        order: 2;
        width: fit-content;
    }

    h1 {
        margin-top: 0.83em;
    }

    h2 {
        margin-top: 0.83em;
        margin-bottom: 20px;
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

    .sommaire {
        display: none;

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

    img {
      width: 300px;
      float: right;
    }
}
</style>

