<template>
    <div class="card p-6">
        <img :src="props.avatar" :alt="props.name" class="mb-4">
        <p class="mb-3 text-[var(--text-secondary)]">{{ props.desc }}</p>
        <span class="flex items-center gap-1 text-[var(--text-secondary)]">
            <span>{{ props.name }}</span>
            <span>-</span>
            <span class="text-[var(--text-third)]">{{ props.workplace }}</span>
        </span>
    </div>
</template>

<script setup>
const props = defineProps(['avatar', 'desc', 'name', 'workplace'])
</script>

<style scoped>

</style>