<template>
    <section class="p-16 lg:px-32 lg:py-48 flex justify-between bg-neutral-200 dark:bg-neutral-950">
        <div class="flex flex-col gap-4 text-center md:text-start items-center md:items-start">
            <div class="flex flex-col">
                <h1 class="dark:text-indigo-50 text-4xl text-center md:text-start md:text-5xl font-semibold tracking-wide">{{ this.heading }}</h1>
                <h1 class="text-indigo-600 text-4xl text-center md:text-start md:text-5xl font-semibold tracking-wide">{{ this.sec_heading }}</h1>
            </div>
            <div class="lg:w-1/2 flex flex-col gap-4 text-center md:text-start items-center md:items-start">
                <slot></slot>
            </div>
        </div>

        <img :src="this.img">
    </section>
</template>

<script>
export default {
    props: ["heading", "sec_heading", "img"]
}
</script>