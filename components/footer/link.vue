<template>
    <NuxtLink class="text-lg text-neutral-500 hover:text-indigo-600 ease-in-out duration-150" :to="this.href">{{ this.label }}</NuxtLink>
</template>

<script>
export default {
    props: ["label", "href"]
}
</script>