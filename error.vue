<template>
    <Navbar/>
    <section class="flex justify-center items-center bg-neutral-950 py-16 lg:py-64 w-full">
        <div class="flex items-center flex-col p-8 gap-4 sm:gap-2 bg-neutral-90">
            <Heading class="text-8xl sm:text-[16rem] font-bold">{{ error.statusCode }}</Heading>
            <span class="text-primary text-xl -mt-4">{{ error.message }}</span>
        </div>
    </section>
    <FooterSection></FooterSection>
</template>

<script setup>
defineProps(["error"])
</script>