<template>
    <div class="flex justify-between h-screen">
        <div class="flex flex-col w-3/4">
            <Header layout="login" class="container"/>
            <div class="px-72">
                <slot />
            </div>
        </div>

        <div class="w-1/4">
            <img :src="righSideImage" alt="right side image" class="min-w-full min-h-full object-fill">
        </div>
    </div>
</template>

<script setup>
import righSideImage from "@/assets/images/right-side-image.png"
</script>

<style lang="scss" scoped></style>