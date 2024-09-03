<template>
    <div class="relative pt-20 features-bg">
        <div class="container">
            <h2 class="text-5xl font-bold text-center text-[var(--text-primary)] mb-10">Use sensitive data without <br> sacrificing privacy</h2>
            <p class="text-[var(--text-secondary)] text-center mb-24">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est.</p>

            <div class="flex items-center justify-between gap-20">
                <div class="w-1/2">
                    <p class="text-4xl font-bold text-[var(--text-primary)] mb-4">Standardized dev <br /> environments</p>
                    <p class="text-[var(--text-secondary)] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit, sed do eiusmod tempor incididunt ut labore et <br> dolore magna aliqua.</p>

                    <ul class="pl-5">
                        <li class="text-[var(--text-secondary)] custom-list-image">Performance reviews</li>
                        <li class="text-[var(--text-secondary)] custom-list-image">Objectives and goal setting</li>
                        <li class="text-[var(--text-secondary)] custom-list-image">Manager check-ins</li>
                    </ul>
                </div>

                <div class="w-1/2 ">
                    <img src="../../assets/images/features.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.features-bg::before {
    content: " ";

    position: absolute;
    top: 0;

    width: 100%;
    height: 140px;

    background: linear-gradient(0deg, rgba(31, 41, 55, 0.00) 1.68%, rgba(31, 41, 55, 0.64) 99.31%);
}
</style>