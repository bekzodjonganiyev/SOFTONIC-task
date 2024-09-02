<script setup>
const { className } = defineProps(["className"])
</script>

<template>
    <div :class="cn('w-fit px-6 py-1 hover:rotate-1 gradient-border cursor-pointer text-[var(--text-secondary)]', className)">
        <slot />
    </div>
</template>

<style scoped>
.gradient-border {
    position: relative;
    /* Establish positioning context for the pseudo-element */
    border-radius: 30px;
    /* Set border radius */
    z-index: 1;
    /* Stack above the pseudo-element */
    background: var(--bg-secondary);
    /* Background color for inner content */
    overflow: hidden;
    /* Ensures content does not exceed rounded corners */
}

.gradient-border::before {
    content: '';
    /* Empty content for pseudo-element */
    position: absolute;
    /* Position relative to parent */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 30px;
    /* Match border radius of parent */
    padding: 2px;
    /* Width of the gradient border */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(195, 208, 227, 0.936) 50%, rgba(255, 255, 255, 0) 100%);
    /* Gradient */
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    /* Mask for transparent inner content */
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    /* Allows clicks to pass through to the content */
    z-index: -1;
    /* Positioned behind the content */
}
</style>