<template>
    <div class="container">
        <h2 class="xl:text-5xl lg:text-4xl text-2xl font-bold text-center text-[var(--text-primary)] mb-14">Resources to help you get the
            <br>most out of Neon</h2>

        <div class="flex items-center justify-center gap-5 mb-16 max-lg:overflow-auto max-lg:pl-44 max-lg:py-2">
            <ReusableChipButton class-name="flex items-center gap-2 hover:rotate-2 group min-w-[180px]">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Developers</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group min-w-[176px]">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Designers</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group min-w-[176px]">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Founders</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group min-w-[176px]">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Marketers</span>
            </ReusableChipButton>
        </div>

        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-20">
            <!-- <div v-for="(resoursce, id) in resources" :key="id" class="card">
                <span :inner-h-t-m-l="resoursce.icon"></span>
                <span>{{ resoursce.name }}</span>
            </div> -->
            <div class="card p-6 flex flex-col items-start">
                <SvgTelegram class="-ml-4" />
                <p class="text-xl text-[var(--text-primary)] font-medium">Neon Telegram</p>
            </div>

            <div class="card p-6 flex flex-col items-start">
                <SvgDiscord class="-ml-4" />
                <p class="text-xl text-[var(--text-primary)] font-medium">Neon Telegram</p>
            </div>

            <div class="card p-6 flex flex-col items-start">
                <SvgDocs class="-ml-4" />
                <p class="text-xl text-[var(--text-primary)] font-medium">Neon Telegram</p>
            </div>

            <div class="card p-6 flex flex-col items-start">
                <SvgVideo class="-ml-4" />
                <p class="text-xl text-[var(--text-primary)] font-medium">Neon Telegram</p>
            </div>
        </div>

        <div class="grid grid-cols-4 max-lg:gap-10 p-10 banner-bg">
            <div class="lg:col-span-3 col-span-4">
                <h3 class="xl:text-4xl lg:text-3xl text-2xl font-bold text-[var(--text-primary)] mb-1">Get started with Neon</h3>
                <p class="text-[#BFDBFE]">It only takes a few minutes to get started with Neon. Understand your users,
                    start free, today.</p>
            </div>

            <div class="flex items-center justify-center max-lg:col-span-4 max-lg:w-full">
                <button class="btn btn-primary w-full">Start Free Trial -></button>
            </div>
        </div>
    </div>
</template>

<script setup>
// import Discord from '../svg/discord.vue';
// import Docs from '../svg/docs.vue';
// import Telegram from '../svg/telegram.vue';
// import Video from '../svg/video.vue';

// const resources = [
//     {
//         icon: <Telegram />,
//         name: "Neon Telegram"
//     },
//     {
//         icon: <Discord />,
//         name: "Neon Discord"
//     },
//     {
//         icon: <Docs />,
//         name: "Neon TelegraDocs"
//     },
//     {
//         icon: <Video />,
//         name: "Neon Tutorials"
//     }
// ]
</script>

<style scoped>
.banner-bg {
    border-radius: 4px;
    background: linear-gradient(45deg, #2563EB 1.12%, #A855F7 99.43%);
}
</style>