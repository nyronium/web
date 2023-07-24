<template>
    <section class="flex flex-col gap-2 p-16 items-center bg-neutral-300 dark:bg-neutral-950">
        <h1 class="text-center text-4xl font-semibold dark:text-indigo-50 mb-4">{{ this.heading }} <span class="text-indigo-600">{{ this.colored }}</span></h1>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: ["heading", "colored"]
}
</script>