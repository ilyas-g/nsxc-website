<template lang="">
    <section id="schedule">
        <!-- <div class="bg-layer"></div> -->
        <div class="flextest">
            <div class="container relative-content">
                <div>
                    <h2 class="relative-content">{{ t("venueTitle") }}</h2>

                    <h3>KOPSTER Hotel Residence Paris Ouest Colombes</h3>
                    <p>📌 65 Rue Germaine Tillion, 92700 Colombes, France</p>

                    <div class="container transports">
                    <div class="transport">
                        <h4>🚙 CAR 🚙</h4>
                        <ul>
                            <li>A86 direction Colombes</li>
                        </ul>

                    </div>
                    <div class="transport">

                        <h4>🚉 TRAIN 🚉</h4>
                        <ul>
                            <li>From Paris St-Lazare</li>
                            <li>Line J Station "Le Stade"</li>
                        </ul>
                    </div>

                    <div class="transport">

                        <h4>🚍 BUS 🚍</h4>

                        
                        <div class="flexBus">
                            <div class="voieDeBus">
                                <h5>From Paris - La Défense :</h5>

                                <ul>
                                    <li>BUS RATP 276 - Station "Boulevard d'achères"<br></li>
                                    <li><a href="https://www.ratp.fr/plans-lignes/busratp/276" target="_blank">https://www.ratp.fr/plans-lignes/busratp/276</a></li>
                                </ul>
                            </div>


                            <div class="voieDeBus">
                                <h5>Other Way around the venue :</h5>

                                <ul>
                                    <li>BUS RATP 176 - Station "Boulevard d'achères"<br></li>
                                    <li><a href="https://www.ratp.fr/plans-lignes/busratp/176" target="_blank">https://www.ratp.fr/plans-lignes/busratp/176</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            



            <!-- <div class="relative-content">
                <h4>🚍 BUS 🚍</h4>
                <div class="container">
                    <div class="mr-4 mb-4">
                        <h5>From Paris - La Défense :</h5>
                        <p>BUS RATP 276 - Station "Boulevard d'achères"<br>
                            <a href="https://www.ratp.fr/plans-lignes/busratp/276" target="_blank">https://www.ratp.fr/plans-lignes/busratp/276</a>
                        </p>
                    </div>
                    <div class="ml-4 mb-4">
                        <h5>Other Way around the venue :</h5>
                        <p>BUS RATP 176 - Station "Boulevard d'achères"<br>
                            <a href="https://www.ratp.fr/plans-lignes/busratp/176" target="_blank">https://www.ratp.fr/plans-lignes/busratp/176</a>
                        </p>
                    </div>
                </div>
            </div> -->


        </div>
        
        <!-- <p class="master-plus">Le MASTER EVENT + est l'unique événement de sa catégorie. Une étape majeure du championnat qui donnera un avantage considérable dans le classement général.</p> -->
        <div class="text-center relative-content">
            <div>
                <div class="text-center map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.051374113094!2d2.252171775966242!3d48.9334632954211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665dbfc4b5c09%3A0xce609c8318b7871a!2s65%20Rue%20Germaine%20Tillion%2C%2092700%20Colombes!5e0!3m2!1sfr!2sfr!4v1745347940260!5m2!1sfr!2sfr"
                        width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

    </div>
    <div class="relative-content">
        <h3>Hébergement</h3>
        <div class="needsStafff">

            <StaffCard title="KOPSTER Hotel Residence Paris Ouest Colombes" :imgSrc="kopster" link="https://www.kopsterhotels.com/en"
            description="KOPSTER Hotel Residence Paris Ouest Colombes" />
            <StaffCard title="Hôtel Kyriad Colombes" :imgSrc="kyriad" link="https://letude.group/"
            description="Hôtel Kyriad Colombes" />
            <StaffCard title="All Suites Appart Hôtel Paris Ouest Colombes" :imgSrc="allSuites" description="All Suites Appart Hôtel Paris Ouest Colombes" />

        </div>
    </div>
<!-- <a href="https://www.start.gg/tournament/paris-games-week-master-event/details" target="_blank" class="btn-ope masterEventPlus mt-5 mx-auto">{t('signup')}</a> -->
    </section>
</template>
<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
import StaffCard from '~/components/mindset25/volunteerStaff/VolunteerStaff.vue'

import kopster from '~/public/img/hotel-kopster.jpg'
import allSuites from '~/public/img/hotel-all-suites.jpg'
import kyriad from '~/public/img/hotel-kyriad.jpg'

const { t } = useI18n()
</script>
<style lang="scss">
@use "./style.scss";
@use "~/assets/mindset25/css/variables";

    .needsStafff {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-direction: row;
            justify-content: space-around;
        }

        .cardStaff-btn {
            display: block;
            margin: 30px auto;
        }
    }
</style>
