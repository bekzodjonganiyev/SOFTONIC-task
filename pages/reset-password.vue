<template>
    <div class="w-96 mx-auto">
        <form>
            <h1 class="text-5xl text-[var(--text-primary)] font-semibold mb-8">Reset password</h1>

            <p class="italic text-[#6B7280] mb-8">Enter your email address. If an account exists, you’ll receive an email with a password reset link soon.</p>

            <ReusableInput is-required="true" label="Email" type="email" class="mb-4" />

            <button class="btn btn-primary w-full mb-6">Reset Password -></button>

        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login-page"
})
</script>

<style scoped></style>