<template>
    <div class="container pt-[34px] pb-[80px]">
        <ul class="flex items-center justify-between gap-10 mb-9 max-md:overflow-auto">
            <!-- <li v-for="(brand, id) in brands" :key="id">{{ brand }}</li> -->
            <li>
                <SvgFacebook />
            </li>
            <li>
                <SvgTinder />
            </li>
            <li>
                <SvgAirbnb />
            </li>
            <li>
                <SvgHubspot />
            </li>
            <li>
                <SvgAmazon />
            </li>
        </ul>

        <hr class="border border-[#1F2937] mb-20">

        <h2 class="xl:text-5xl lg:text-4xl text-2xl font-bold text-center text-[var(--text-primary)] mb-10">Focus on solving bigger problems</h2>

        <div class="flex items-center justify-between mb-16">
            <!-- <div class="github clg-g"> -->
                <SvgGithub class="md:size-1/3 max-md:size-[200px]"/>
            <!-- </div> -->

            <!-- <div class="pattern clg-g"> -->
                <SvgPattern class="md:size-1/3 max-md:size-[200px]"/>
            <!-- </div> -->

            <!-- <div class="sharing clg-g"> -->
                <SvgSharing class="md:size-1/3 max-md:size-[200px]"/>
            <!-- </div> -->
        </div>

        <div class="flex max-sm:flex-col items-center justify-between gap-20">
            <div class="flex flex-col items-center text-center md:w-1/3">
                <SvgScaner class="mb-4" />
                <p class="text-[var(--text-primary)] text-2xl font-semibold mb-2">Ready for the future</p>
                <p class="text-[var(--text-secondary)]">A flexible foundation that evolves with complex ecosystem.</p>
            </div>

            <div class="flex flex-col items-center text-center md:w-1/3">
                <SvgCode class="mb-4" />
                <p class="text-[var(--text-primary)] text-2xl font-semibold mb-2">Ready for the future</p>
                <p class="text-[var(--text-secondary)]">A flexible foundation that evolves with complex ecosystem.</p>
            </div>

            <div class="flex flex-col items-center text-center md:w-1/3">
                <SvgCheck class="mb-4" />
                <p class="text-[var(--text-primary)] text-2xl font-semibold mb-2">Ready for the future</p>
                <p class="text-[var(--text-secondary)]">A flexible foundation that evolves with complex ecosystem.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue';

// import Facebook from '../svg/facebook.vue';
// import Tinder from '../svg/tinder.vue';
// import Airbnb from '../svg/airbnb.vue';
// import Hubspot from '../svg/hubspot.vue';
// import Amazon from '../svg/amazon.vue';

// const brands = [Facebook.components, Tinder, Airbnb, Hubspot, Amazon]

</script>

<style scoped>
@media screen and (min-width: 1440px) {
    .show-case-bg {
        background-image: url("../../assets/images/star-bg.png");
        background-repeat: no-repeat;
        background-size: fill;
        background-position: 10% 50%;
        background-clip: padding-box;
    }
}
</style>