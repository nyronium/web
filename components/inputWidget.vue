<template>
    <input :type="this.type" :placeholder="this.placeholder" class="text-center bg-neutral-200 dark:bg-neutral-900 rounded-xl border-0 py-3 px-6 text-neutral-950 dark:text-indigo-50 shadow-sm ring-1 ring-inset ring-neutral-400 dark:ring-neutral-800 placeholder:text-neutral-600 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600">
</template>

<script>
export default {
    props: ["type", "placeholder"]
}
</script>