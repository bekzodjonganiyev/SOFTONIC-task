<template>
    <header class="w-full h-20 flex justify-between items-center">
        <SvgMainLogo />

        <div class="flex items-center gap-8">
            <NuxtLink to="/sign-in" class="text-[var(--text-secondary)]">
                Sign In
            </NuxtLink>

            <NuxtLink to="/sign-up" class="btn btn-primary">
                Sign Up ->
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped></style>