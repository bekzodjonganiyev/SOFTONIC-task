<template>
    <div class="flex flex-col">
        <label :for="label" :class="cn('relative w-fit flex items-center justify-between text-[var(--text-secondary)]', resetPassword === 'true' ? 'w-full' : '')">
            {{ label }}
            <span v-if="isRequired === 'true'" class="absolute -right-2 top-0 text-red-500">*</span>
            <NuxtLink v-if="resetPassword" to="reset-password" class="text-[var(--text-third)]">Troubles?</NuxtLink>
        </label>
        <input :type="type" :id="label" :required="isRequired" class="px-3 py-2 rounded-md text-[var(--text-primary)] focus:outline-none border border-[#374151] bg-[#1F2937]">
    </div>
</template>

<script setup>
const { label, type, isRequired, resetPassword} = defineProps(['label', 'type', 'isRequired', 'resetPassword'])
</script>

<style scoped>

</style>