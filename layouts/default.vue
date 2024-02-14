<template>
    <div class="main-container">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
</style>