<template>
    <div :class="$style.container">
        <div :class="[$style.background, $style['red-bg']]" :style="{ opacity: isSignupRoute ? 1 : 0 }"></div>
        <div :class="[$style.background, $style['green-bg']]" :style="{ opacity: isSignupRoute ? 0 : 1 }"></div>
        <main :class="$style['content-container']">
            <div :class="$style.imageContainer">
                <div :class="$style.header">
                    <div :class="$style.logoContainer">
                        <img src="../assets/UPLogo.svg" :class="$style.logo">
                        <img src="../assets/UPloadLogo.svg" :class="$style.logo">
                    </div>
                    <div :class="$style.buttonContainer">
                        <BaseNavButton id="signup" route="/auth/signup" :variant="isSignupRoute ? 'red-full' : 'empty'" width="7rem">Signup</BaseNavButton>
                        <BaseNavButton id="login" route="/auth/login" :variant="isSignupRoute ? 'empty' : 'green-full'" width="7rem">Login</BaseNavButton>
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
</script>

<style lang="scss" module>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: $black;
    }

    .content-container {
        position: relative;
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

    .red-bg {
        background-image: url('../assets/backgroundImages/bgee.png');
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $red;
    }

    .green-bg {
        background-image: url('../assets/backgroundImages/bgee.png');
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $green;
    }

    .red-bg, .green-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.45s ease, visibility 0.5s ease;
        visibility: visible;
    }

    .red-bg[style*="opacity: 0"],
    .green-bg[style*="opacity: 0"] {
        visibility: hidden;
    }
</style>