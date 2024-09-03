<template>
    <div class="container">
        <h2 class="text-5xl font-bold text-center text-[var(--text-primary)] mb-14">Resources to help you get the <br>most out of Neon</h2>

        <div class="flex items-center justify-center gap-5 mb-16">
            <ReusableChipButton class-name="flex items-center gap-2 hover:rotate-2 group">
                <!-- <span>icon</span> -->
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Developers</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Designers</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Founders</span>
            </ReusableChipButton>
            <ReusableChipButton class-name="flex gap-2 items-center hover:rotate-2 group">
                <SvgForDev />
                <span class="text-[var(--text-secondary)] group-hover:text-[var(--text-third)]">For Marketers</span>
            </ReusableChipButton>
        </div>

        <div class="grid grid-cols-4 gap-6 mb-20">
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

        <div class="flex items-center justify-between p-10 banner-bg">
            <div>
                <h3 class="text-4xl font-bold text-[var(--text-primary)] mb-1">Get started with Neon</h3>
                <p class="text-[#BFDBFE]">It only takes a few minutes to get started with Neon. Understand your users, start free, today.</p>
            </div>

            <button class="btn btn-primary">Start Free Trial -></button>
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