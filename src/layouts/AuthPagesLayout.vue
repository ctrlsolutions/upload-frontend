<template>
    <div :class="[$style.container, isSignupRoute ? $style['red-bg'] : $style['green-bg']]">
        <main :class="$style['content-container']">
            <div :class="$style.imageContainer">
                <div :class="$style.header">
                    <div :class="$style.logoContainer">
                        <img src="../assets/UPLogo.svg" :class="$style.logo">
                        <img src="../assets/UPloadLogo.svg" :class="$style.logo">
                    </div>
                    <div :class="$style.buttonContainer">
                        <BaseNavButton id="signup" route="/auth/signup" :variant="isSignupRoute ? 'red-full' : 'empty'" :class="{ 'bounce': animateButton }" width="7rem">Signup</BaseNavButton>
                        <BaseNavButton id="login" route="/auth/login" :variant="isSignupRoute ? 'empty' : 'green-full'" :class="{ 'bounce': animateButton }" width="7rem">Login</BaseNavButton>
                    </div>
                </div>
                <img src="../assets/backgroundImages/oble_closeup.png" :class="$style.img">
            </div>    
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
    import { computed, watch, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import BaseNavButton from '@/components/Global/BaseNavButton.vue';

    const route = useRoute();
    const isSignupRoute = computed(() => route.path === '/auth/signup');

    const animateButton = ref(false);

    watch(route, (newRoute, oldRoute) => {
    if (
        (newRoute.path === "/auth/signup" || newRoute.path === "/auth/login") &&
        (oldRoute.path === "/auth/signup" || oldRoute.path === "/auth/login")
    ) {
        animateButton.value = true;
        setTimeout(() => (animateButton.value = false), 500);
    }
});
</script>

<style module>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    .content-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        width: 80%;
        height: 90%;
        background-color: white;
        border-radius: 40px;
    }

    .imageContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        max-width: 40%;
        box-sizing: border-box;
        padding: 1rem;
    }
    
    .img {
        width: 100%;
        height: 100%;
        max-height: 90vh;
        object-fit: cover;
        border-radius: 2rem;
    }

    .header {
        position: absolute;
        top: 1.5rem;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        flex-wrap: wrap;
        padding: 0 2rem 0 2rem;
    }

    .logoContainer {
        display: flex;
        align-items: center;
    }

    .logo {
        height: 2.8rem;
        width: auto;
    }

    .buttonContainer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0rem;
    }

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    .bounce {
        animation: bounce 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .red-bg {
        background-image: url('../assets/backgroundImages/bgee.png');
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgb(116, 0, 23);
    }

    .green-bg {
        background-image: url('../assets/backgroundImages/bgee.png');
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgb(6, 78, 0);
    }

</style>