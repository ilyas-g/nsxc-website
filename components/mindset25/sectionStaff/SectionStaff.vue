<template>
    <section class="sectionStaff">

        <h2 class="text-center">Joins Us</h2>
        <div class="needsStaff">
            <StaffCard title="Commentators" :imgSrc="commentators"
            description="
            Commentators have the power to accompany our memories and make us feel strong emotions. We need you to make us vibrate, shout and share these moments that will be historic
            " />
            <StaffCard title="Volunteers" :imgSrc="volunteers" link="https://letude.group/"
            description="
            We need your help to provide one of the best experience on fighting games event! If you're looking to be a part of MINDSET team ?
            " />
            <StaffCard title="Media" :imgSrc="media" description="" />
        </div>
    </section>
</template>
<script setup lang="ts">
import StaffCard from '~/components/mindset25/volunteerStaff/VolunteerStaff.vue'
import volunteers from '~/public/img/volunteers.jpeg'
import media from '~/public/img/media.jpeg'
import commentators from '~/public/img/commentators.jpeg'
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
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
