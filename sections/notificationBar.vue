<template>
    <a :href="this.target">
        <header class="text-indigo-50 bg-indigo-600 flex justify-center items-center p-2">
            <span>
                <slot></slot>
            </span>
        </header>
    </a>
</template>

<script>
export default {
    props: ["target"]
}
</script>