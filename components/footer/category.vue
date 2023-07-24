<template>
    <div class="flex flex-col text-center items-center lg:text-start lg:items-start gap-2">
        <h1 class="text-lg font-medium dark:text-indigo-50">{{ this.title }}</h1>
        <div class="flex flex-col gap-0.5">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title"]
}

</script>