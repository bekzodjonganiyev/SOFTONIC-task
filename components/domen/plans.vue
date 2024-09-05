<template>
    <div class="container pb-20">
        <h2 class="xl:text-5xl lg:text-4xl text-2xl font-bold text-center text-[var(--text-primary)] mb-4">Find a plan that's right for you</h2>
        <p class="text-[var(--text-secondary)] text-center mb-24">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br> officia deserunt mollit anim id est.</p>

        <div class="grid md:grid-cols-3 grid-cols-1 justify-between">
            <ReusablePricingCard 
                title="Starter" 
                price="49"
                desc="For teams building apps for many public & private users." features-title="Features include:"
                :features="[
                    'Unlimited placeholder texts',
                    'Consectetur adipiscing elit',
                    'Excepteur sint occaecat cupidatat',
                    'Officia deserunt mollit anim'
                ]" 
                class="p-6"
             />

            <ReusablePricingCard 
                title="Starter" 
                price="49"
                desc="For teams building apps for many public & private users." features-title="Features include:"
                :features="[
                    'Unlimited placeholder texts',
                    'Consectetur adipiscing elit',
                    'Excepteur sint occaecat cupidatat',
                    'Officia deserunt mollit anim',
                    'Excepteur sint occaecat cupidatat',
                    'Officia deserunt mollit anim'
                ]" 
                class="card p-6 popular" 
                popular
            />

            <ReusablePricingCard 
                title="Starter" 
                price="49"
                desc="For teams building apps for many public & private users." features-title="Features include:"
                :features="[
                    'Unlimited placeholder texts',
                    'Consectetur adipiscing elit',
                    'Excepteur sint occaecat cupidatat',
                    'Officia deserunt mollit anim'
                ]" 
                class="p-6" 
            />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.popular {
    position: relative;
}

.popular::after {
    content: " ";

    position: absolute;
    bottom: -50px;
    left: -20px;
    z-index: -1;
    width: 400px;
    height: 400px;
    border-radius: 400px;
    background: linear-gradient(180deg, rgba(59, 130, 246, 0.00) 0%, rgba(59, 130, 246, 0.48) 100%);
    filter: blur(30.95704650878906px);
}

@media screen and (max-width: 500px) {
    .popular::after {
        width: 200px;
        height: 200px;
    } 
}
</style>