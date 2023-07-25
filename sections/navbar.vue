<template>
    <nav class="sticky top-0 px-6 py-4 flex justify-between gap-3 bg-neutral-100 dark:bg-neutral-950">
        <div class="flex gap-3 items-center">
            <NuxtLink to="/"><img class="w-10 h-10" src="/icon.png" alt=""></NuxtLink>
            <h1 class="dark:text-indigo-50 text-lg font-medium capitalize hom">Nyronium Network</h1>
        </div>

        <div class="flex gap-8 items-center">
            <NuxtLink to="/products" class="text-md hom dark:text-indigo-50 tracking-wide font-medium hover:text-indigo-600 ease-in-out duration-150">Products</NuxtLink>
            <NuxtLink to="/docs" class="text-md hom dark:text-indigo-50 tracking-wide font-medium hover:text-indigo-600 ease-in-out duration-150">Documentation</NuxtLink>
            
            <Clickable>
                <span>Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>

            </Clickable>
        </div>
    </nav>
</template>