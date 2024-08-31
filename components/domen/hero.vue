<template>
    <div class="hero">
        <div class="px-20">
            <Header />

            <div class="mt-16">
                <ReusableChipButton class-name="mb-7">
                    Launching Infinite Workspaces. <span class="text-[var(--text-third)]">Learn More -></span>
                </ReusableChipButton>

                <h1 class="text-[var(--text-primary)] text-7xl font-bold mb-7">Where the world <br> builds software</h1>

                <p class="text-[var(--text-secondary)] mb-8">Our landing page template works on all devices, so you only have to <br> set it up once, and get beautiful results forever.</p>

                <div class="flex items-center gap-4">
                    <button class="btn btn-primary">Get Started For Free -></button>
                    <button class="btn btn-secondary">Explore Docs</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero {
    position: relative;

    background: #111827;
    height: 700px;
}

.hero::before {
    content: " ";

    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url("../../assets/images/hero-bg.png");
    background-repeat: no-repeat;
    background-size: fill;
    background-position: right top;
}

.hero::after{
    content: " sas";

    position: absolute;
    bottom: 0;
    z-index: 2;

    width: 100%;
    height: 140px;

    background: linear-gradient(180deg, rgba(31, 41, 55, 0.071) 0.69%, rgba(31, 41, 55, 0.64) 98.32%);
    /* background: red; */
}
</style>