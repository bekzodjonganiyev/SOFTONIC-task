<template>
    <div class="grid grid-cols-6 h-screen">
        <div class="flex flex-col md:col-span-4 col-span-6">
            <Header layout="login" class="container max-md:hidden"/>
            <div class="max-md:py-5 px-3 min-w-[410px]">
                <slot />
            </div>
        </div>

        <div class="md:col-span-2 max-md:hidden h-full">
            <img :src="righSideImage" alt="right side image" class="w-full h-full object-fill">
        </div>
    </div>
</template>

<script setup>
import righSideImage from "@/assets/images/right-side-image.png"
</script>

<style lang="scss" scoped></style>