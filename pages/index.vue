<template>
    <NotificationBar target="https://github.com/orgs/nyronium/discussions">
        <span class="text-sm">Our new website is now running with Vue and TailwindCSS! <strong>Click here to discuss about the new design.</strong></span>
    </NotificationBar>
    <NavBar/>

    <Hero heading="Software for everyone." sec_heading="Reimagined.">
        <p class="dark:text-indigo-50 tracking-wide flex flex-col">
            We aim to develop software that is useful, performant and well designed.
            We're focussing on web applications, CLIs and desktop applications.
        </p>

        <Clickable>
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
            </svg>

        </Clickable>
    </Hero>
    <Spotlight heading="Explore our" colored="products.">
        <div class="flex flex-col gap-2 md:flex-row">
            <NuxtLink to="/products/fyutils" class="flex text-primary ease-in-out duration-150 rounded-xl px-12 py-6 gap-4 items-center hover:bg-neutral-200 dark:hover:bg-neutral-900 hover:shadow-sm hover:ring-2 ring-inset outline-none hover:ring-indigo-600 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                    <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                </svg>

                <div>
                    <h1 class="text-2xl font-semibold tracking-wide dark:text-indigo-50">FyUTILS</h1>
                    <span class="text-md text-neutral-500">Hacking and utility CLI</span>
                </div>
            </NuxtLink>

            <NuxtLink to="/products/hydrogen" class="flex text-primary ease-in-out duration-150 rounded-xl px-12 py-6 gap-4 items-center hover:bg-neutral-200 dark:hover:bg-neutral-900 hover:shadow-sm hover:ring-2 ring-inset outline-none hover:ring-indigo-600 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                    <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>

                <div>
                    <h1 class="text-2xl font-semibold tracking-wide dark:text-indigo-50">Nitro</h1>
                    <span class="text-md text-neutral-500">Package manager</span>
                </div>
            </NuxtLink>

            <NuxtLink to="/products/oxygen" class="flex text-primary ease-in-out duration-150 rounded-xl px-12 py-6 gap-4 items-center hover:bg-neutral-200 dark:hover:bg-neutral-900 hover:shadow-sm hover:ring-2 ring-inset outline-none hover:ring-indigo-600 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                    <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
                </svg>

                <div>
                    <h1 class="text-2xl font-semibold tracking-wide dark:text-indigo-50">Oxygen</h1>
                    <span class="text-md text-neutral-500">Performance profiler</span>
                </div>
            </NuxtLink>
        </div>
    </Spotlight>
    <Spotlight heading="Recieve our latest" colored="updates.">
        <InputWidget type="email" placeholder="name@company.tld"/>
        <span class="text-sm text-neutral-400">We won't ever send you spam mails.</span>
    </Spotlight>
    <Hero heading="Developing" sec_heading="further.">
        <p class="dark:text-indigo-50 tracking-wide flex flex-col">
            We're keep learning new languages, frameworks and tools to bring our apps to the next level.
            If you want to help us, you can donate us by clicking on the button below.
        </p>

        <Clickable>
            <span>Donate</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
            </svg>


        </Clickable>
    </Hero>
    <FooterSection/>
</template>