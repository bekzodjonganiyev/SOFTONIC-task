<template>
    <div class="w-96 mx-auto">
        <form>
            <h1 class="xl:text-5xl lg:text-4xl text-2xl text-[var(--text-primary)] font-semibold mb-8">Sign Up</h1>

            <ReusableInput is-required="true" label="Email" type="email" class="mb-4"/>

            <div class="grid grid-cols-2 gap-4 mb-4 w-full">
                <ReusableInput is-required="true" label="Name" type="text"  class=""/>
                <ReusableInput is-required="true" label="Surname" type="text"  class=""/>
            </div>

            <ReusableInput is-required="true" label="Password" type="password" class="mb-8"/>

            <button type="submit" class="btn btn-primary w-full">Sign Up -></button>

            <div class="flex items-center gap-2 my-4">
                <span class="flex-1 border border-[#1F2937]"></span>
                <span class="text-[var(--text-secondary)] italic">Or</span>
                <span class="flex-1 border border-[#1F2937]"></span>
            </div>

            <button class="btn btn-third w-full mb-6">
                <span class="flex items-center">
                    <SvgGoogle />

                    <span class="text-white flex-1">Continue With Google</span>
                </span>
            </button>
            
            <p class="italic text-[#6B7280]">By filling out this form, I consent to the collection and use of my personal data. </p>
        </form>

        <hr class="border border-[#1F2937] my-4 w-96">

        <p class="text-[var(--text-secondary)]">Already have an account? <NuxtLink to="sign-in" class="text-[var(--text-third)]">Sign In</NuxtLink></p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login-page"
})
</script>

<style scoped></style>