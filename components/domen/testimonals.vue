<template>
    <div class="relative py-20 testimonals-bg">
        <div class="container">
            <h2 class="xl:text-5xl lg:text-4xl text-2xl font-bold text-center text-[var(--text-primary)] mb-20">Sound too good ? Hear what our<br>customers have to say</h2>

            <div class="relative grid md:grid-cols-3 grid-cols-1 gap-6 testimonals-grid-bg">
                <ReusableTestimonalCard v-for="(testimonal, id) in testimonals" :key="id" :="testimonal"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import avatar from "@/assets/images/avatar.png"

const testimonals = [
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    },
    {
        avatar: avatar,
        desc: "Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.",
        name: "Mark Luiss",
        workplace: "Apprenda"
    }
]
</script>

<style scoped>
.testimonals-bg::before {
    content: " ";

    position: absolute;
    top: 0;

    width: 100%;
    height: 140px;

    background: linear-gradient(0deg, rgba(31, 41, 55, 0.00) 1.68%, rgba(31, 41, 55, 0.64) 99.31%);
}

.testimonals-grid-bg::after {
    content: " ";

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 140px;
    background: linear-gradient(180deg, rgba(17, 24, 39, 0.00) 0%, rgba(17, 24, 39, 0.88) 99.32%);
}
</style>