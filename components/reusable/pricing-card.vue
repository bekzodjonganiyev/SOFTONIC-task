<template>
    <div class="relative">
        <div v-if="popular" class="absolute -top-4 right-5 flex items-center gap-2 bg-[#A7F3D0] px-4 py-1 rounded-2xl text-[#057857] font-medium"><SvgPopular /> <span>Most Popular</span></div>

        <p class="text-[var(--text-primary)] text-xl font-semibold mb-2">{{ title }}</p>
        <div class="flex items-end mb-3">
            <span class="text-[var(--text-secondary)] text-3xl">$</span>
            <span class="text-[var(--text-primary)] text-4xl">{{ price }}</span>
            <span class="text-[var(--text-secondary)] text-md">/mo</span>
        </div>
        <p class="text-[var(--text-secondary)] mb-6">{{ desc }}</p>
        <button class="btn btn-primary w-full mb-6">Start Free Trial -></button>
        <p class="text-[var(--text-primary)] mb-4">{{ featuresTitle }}</p>
        <ul class="pl-5">
            <li class="custom-list-image text-[var(--text-secondary)] mb-3" v-for="(feature, id) in features" :key="id">
                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    price: String,
    desc: String,
    featuresTitle: String,
    features: Array,
    popular: Boolean
})
</script>

<style scoped></style>