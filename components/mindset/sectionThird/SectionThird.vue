<template lang="">
    <section id="schedule">
        <div class="flextest">
            <div class="container relative-content">
                <div>
                    <h2 class="relative-content">{{ t("venueTitle") }}</h2>

                    <h3>KOPSTER Hotel Residence Paris Ouest Colombes</h3>
                    <p class="adress-event"><span class="icon-location-dot-solid"></span> 65 Rue Germaine Tillion, 92700 Colombes, France</p>

                    <div class="container transports">
                    <div class="transport">
                        <h4><span class="icon-automobile"></span> {{ t("car") }}</h4>
                        <ul>
                            <li>A86 direction Colombes</li>
                        </ul>

                    </div>
                    <div class="transport">

                        <h4><span class="icon-train"></span> Train</h4>
                        <ul>
                            <li>From Paris St-Lazare</li>
                            <li>Line J Station "Le Stade"</li>
                        </ul>
                    </div>

                    <div class="transport">

                        <h4><span class="icon-bus"></span> Bus</h4>

                        
                        <div class="flexBus">
                            <div class="voieDeBus">
                                <h5>{{ t("parisLaDefense") }}</h5>

                                <ul>
                                    <li>BUS RATP 276 - Station "Boulevard d'achères"<br></li>
                                    <li><a href="https://www.ratp.fr/plans-lignes/busratp/276" target="_blank">https://www.ratp.fr/plans-lignes/busratp/276</a></li>
                                </ul>
                            </div>


                            <div class="voieDeBus">
                                <h5>{{ t("otherWayAroundTheVenue") }}</h5>

                                <ul>
                                    <li>BUS RATP 176 - Station "Boulevard d'achères"<br></li>
                                    <li><a href="https://www.ratp.fr/plans-lignes/busratp/176" target="_blank">https://www.ratp.fr/plans-lignes/busratp/176</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
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
        <h3>{{ t("accommodation") }}</h3>
        <div class="needsStafff">

            <HotelCard title="KOPSTER Hotel Residence Paris Ouest Colombes" :imgSrc="kopster" link="https://www.kopsterhotels.com/colombes/"
            description="KOPSTER Hotel Residence Paris Ouest Colombes" :timeToVenue="firstVenueItinerary" :hotelPrice="firstVenuePrice" />
            <HotelCard title="ibis Styles Colombes Paris Ouest" :imgSrc="ibis" link="https://all.accor.com/hotel/C3U4/index.fr.shtml"
            description="ibis Styles Colombes Paris Ouest" :timeToVenue="fourthVenueItinerary" :hotelPrice="fourthVenuePrice" />
            <HotelCard title="All Suites Appart Hotel Paris Ouest Colombes" :imgSrc="allSuites"
            description="All Suites Appart Hotel Paris Ouest Colombes" link="https://www.allsuites.com/hotel/appart-hotel-paris-colombes"
            :timeToVenue="thirdVenueItinerary" :hotelPrice="thirdVenuePrice" />
            <HotelCard title="B&B HOTEL Argenteuil" :imgSrc="bb" link="https://www.hotel-bb.com/fr/hotel/argenteuil"
            description="B&B HOTEL Argenteuil" :timeToVenue="secondVenueItinerary" :hotelPrice="secondVenuePrice" />
        </div>
    </div>
    </section>
</template>
<script setup lang="ts">
import HotelCard from '~/components/mindset/hotelCard/HotelCard.vue'

import kopster from '~/public/img/hotel-kopster.jpg'
import allSuites from '~/public/img/hotel-all-suites.jpg'
import kyriad from '~/public/img/hotel-kyriad.jpg'
import bb from '~/public/img/hotel-b&b-argenteuil.webp'
import ibis from '~/public/img/hotel-ibis.webp'

const { t } = useI18n()

const firstVenueItinerary = t("firstVenueItinerary")
const secondVenueItinerary = t("secondVenueItinerary")
const thirdVenueItinerary = t("thirdVenueItinerary")
const fourthVenueItinerary = t("fourthVenueItinerary")

const firstVenuePrice = t("firstVenuePrice")
const secondVenuePrice = t("secondVenuePrice")
const thirdVenuePrice = t("thirdVenuePrice")
const fourthVenuePrice = t("fourthVenuePrice")

</script>
<style lang="scss">
@use "./style.scss";
@use "~/assets/mindset/css/variables";

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
