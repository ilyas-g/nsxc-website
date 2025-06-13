<template>
    <section class="sectionPartners">
        <h2 class="text-center">{{ t("partnersTitle") }}</h2>
        <div class="partners">
            <img :src="turtleBeach" alt="Turtle Beach" />
            <img :src="victrix" alt="Victrix By PDP" />
        </div>
    </section>
</template>
<script setup lang="ts">
import turtleBeach from "~/public/img/partners/turtle-beach-logo.webp"
import victrix from "~/public/img/partners/victrix-logo.webp"
const { t } = useI18n()
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
.sectionPartners {
    background-color: variables.$dark-color;
    color: white;
    font-weight: bold;
    padding: 0 15px;

    h2 {
        padding-top: 0.83em;
    }
    .partners {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media screen and (min-width: variables.$media-queries-tablet-small) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        img {
            max-height: 200px;
            margin: 50px 0;
            align-self: center;

            @media screen and (min-width: variables.$media-queries-tablet-small) {
                margin: 50px 15px;
            }
        }
    }
}
</style>
