<template>
    <section class="sectionStaff" id="joinUs">

        <h2 class="text-center">{{ t("joinUsTitle") }}</h2>
        <div class="needsStaff">
            <StaffCard :title="commentatorTitle" :imgSrc="commentators" link="https://docs.google.com/forms/d/e/1FAIpQLSffiHoYBD3jpksl1icxAvS5VVSnKYrP1uZSv1Hr5ppK4m9jMA/viewform"
            :description="commentatorDesc" />
            <StaffCard :title="volunteersTitle" :imgSrc="volunteers" link="https://docs.google.com/forms/d/e/1FAIpQLSdXvXVVD8MCqGlI_oU9dyDfkg9ClGYvTuC-oqtIjKAfV154yA/viewform"
            :description="volunteersDesc" />
            <StaffCard :title="mediaTitle" :imgSrc="media" link="https://docs.google.com/forms/d/e/1FAIpQLSeG9mKzjnFknx02ng1gVccV7SDEPybPjU_1GairD6Ib0hf64Q/viewform"
            :description="mediaDesc" />
        </div>
    </section>
</template>
<script setup lang="ts">
import StaffCard from '~/components/mindset/volunteerStaff/VolunteerStaff.vue'
import volunteers from '~/public/img/volunteers.jpeg'
import media from '~/public/img/media.jpeg'
import commentators from '~/public/img/commentators.jpeg'

const { t } = useI18n()

const commentatorTitle = t("commentatorTitle")
const volunteersTitle = t("volunteersTitle")
const mediaTitle = t("mediaTitle")
const commentatorDesc = t("commentatorDesc")
const volunteersDesc = t("volunteersDesc")
const mediaDesc = t("mediaDesc")

</script>
<style lang="scss">
@use "~/assets/mindset/css/variables";
@use "sass:color";

.sectionStaff {
    color: white;
    background-color: color.adjust(variables.$main-color, $lightness: -45%);

    @media screen and (min-width: variables.$media-queries-desktop-xl) {
        padding-left: 50px;
        padding-right: 50px;
    }

    h2 {
            padding-top: 0.83em;
    }

    .needsStaff {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-direction: row;
            justify-content: space-around;
        }
    }
}
</style>
