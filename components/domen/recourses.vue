<template>
    <div>
        <h2 class="text-5xl font-bold text-center text-[var(--text-primary)] mb-14">Resources to help you get the <br> most out of Neon</h2>

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

        <div class="grid grid-cols-4 gap-6">

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>