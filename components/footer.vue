<template>
    <footer class="container grid grid-cols-5 gap-20 py-12 text-[var(--text-secondary)]">
        <div>
            <SvgMainLogo class="mb-4" />
            <div class="flex items-center gap-1">
                <NuxtLink to="#">Terms</NuxtLink>
                <span> · </span>
                <NuxtLink to="#">Privacy Policy</NuxtLink>
            </div>
        </div>
        
        <div>
            <ul class="space-y-2">
                <p class="font-medium text-[var(--text-primary)]">PRODUCTS</p>
                <li><NuxtLink to="#">Neon Manage</NuxtLink></li>
                <li><NuxtLink to="#">Neon Analyse</NuxtLink></li>
                <li><NuxtLink to="#">Neon Launch</NuxtLink></li>
                <li><NuxtLink to="#">Experimentation</NuxtLink></li>
            </ul>
        </div>
        <div>
            <ul class="space-y-2">
                <p class="font-medium text-[var(--text-primary)]">RESOURCES</p>
                <li><NuxtLink to="#">Blog</NuxtLink></li>
                <li><NuxtLink to="#">Cheat Sheet</NuxtLink></li>
                <li><NuxtLink to="#">Channel Partners</NuxtLink></li>
                <li><NuxtLink to="#">Affiliate Program</NuxtLink></li>
            </ul>
        </div>

        <div>
            <ul class="space-y-2">
                <p class="font-medium text-[var(--text-primary)]">COMPARE</p>
                <li><NuxtLink to="#">Session Recording</NuxtLink></li>
                <li><NuxtLink to="#">Feature Flags</NuxtLink></li>
                <li><NuxtLink to="#">Heatmaps</NuxtLink></li>
                <li><NuxtLink to="#">Correlation Analysis</NuxtLink></li>
            </ul>
        </div>

        <div>
            <ul class="space-y-2">
                <p class="font-medium text-[var(--text-primary)]">COMPANY</p>
                <li><NuxtLink to="#">About Us</NuxtLink></li>
                <li><NuxtLink to="#">Our Story</NuxtLink></li>
                <li><NuxtLink to="#">Work With Us</NuxtLink></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped></style>