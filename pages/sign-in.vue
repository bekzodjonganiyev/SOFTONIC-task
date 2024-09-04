<template>
    <div class="w-96 mx-auto">
        <form>
            <h1 class="text-5xl text-[var(--text-primary)] font-semibold mb-8">Welcome Back!</h1>

            <ReusableInput is-required="true" label="Email" type="email" class="mb-4" />

            <ReusableInput is-required="false" label="Password" type="password" reset-password="true" class="mb-8" />

            <button type="submit" class="btn btn-primary w-full">Sign Up -></button>

            <div class="flex items-center gap-2 my-4">
                <span class="flex-1 border border-[#1F2937]"></span>
                <span class="text-[var(--text-primary)] italic">Or</span>
                <span class="flex-1 border border-[#1F2937]"></span>
            </div>

            <button class="btn btn-third w-full mb-6">
                <span class="flex items-center">
                    <SvgGoogle />

                    <span class="text-white flex-1">Continue With Google</span>
                </span>
            </button>

        </form>

        <hr class="border border-[#1F2937] my-4 w-96">

        <p class="text-[var(--text-secondary)]">Don’t you have an account? <NuxtLink to="sign-up"
                class="text-[var(--text-third)]">Sign Up</NuxtLink>
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login-page"
})
</script>

<style scoped></style>