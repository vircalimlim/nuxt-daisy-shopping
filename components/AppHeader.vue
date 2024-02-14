<template>
    <header>
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <!-- Navbar -->
                <div class="w-full navbar bg-neutral text-neutral-content">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">
                        <NuxtLink to="/">
                            <img height="100px" width="100px"
                                src="data:image/png;base64,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"
                                alt="daisyui">
                        </NuxtLink>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li>
                                <NuxtLink to="/about">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Page content here -->
                <!-- Content -->
            </div>
            <div class="drawer-side z-10">
                <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 min-h-full bg-neutral text-neutral-content">
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>