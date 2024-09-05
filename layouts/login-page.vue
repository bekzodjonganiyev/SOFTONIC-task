<template>
    <div class="grid grid-cols-6 h-screen">
        <div class="flex flex-col md:col-span-4 col-span-6">
            <Header layout="login" class="container"/>
            <div class="lg:px-72 sm:px-20 p-2">
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