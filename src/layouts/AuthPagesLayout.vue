

<template>
    <div :class="[$style.container, isSignupRoute ? $style['red-bg'] : $style['green-bg']]">
    <div :class="[$style.container, isSignupRoute ? $style['red-bg'] : $style['green-bg']]">
        <main :class="$style['content-container']">
            <div :class="$style.imageContainer">
                <div :class="$style.header">
                    <div :class="$style.logoContainer">
                        <img src="../assets/UPLogo.svg" :class="$style.logo">
                        <img src="../assets/UPloadLogo.svg" :class="$style.logo">
                    </div>
                    <div :class="$style.buttonContainer">
                        <router-link 
                            to="/auth/signup" 
                            :class="{ [$style.signupButton]: true, [$style.signupButtonActive]: isSignupRoute }">
                            Signup
                        </router-link>
                        <router-link 
                            to="/auth/login" 
                            :class="{ [$style.loginButton]: true, [$style.loginButtonActive]: !isSignupRoute }">
                            Login
                        </router-link>
                    </div>
                </div>
                <img src="../assets/backgroundImages/oble_closeup.png" :class="$style.img">
            </div>    
            <div :class="$style.imageContainer">
                <div :class="$style.header">
                    <div :class="$style.logoContainer">
                        <img src="../assets/UPLogo.svg" :class="$style.logo">
                        <img src="../assets/UPloadLogo.svg" :class="$style.logo">
                    </div>
                    <div :class="$style.buttonContainer">
                        <router-link 
                            to="/auth/signup" 
                            :class="{ [$style.signupButton]: true, [$style.signupButtonActive]: isSignupRoute }">
                            Signup
                        </router-link>
                        <router-link 
                            to="/auth/login" 
                            :class="{ [$style.loginButton]: true, [$style.loginButtonActive]: !isSignupRoute }">
                            Login
                        </router-link>
                    </div>
                </div>
                <img src="../assets/backgroundImages/oble_closeup.png" :class="$style.img">
            </div>    
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const route = useRoute();

    const isSignupRoute = computed(() => route.path === '/auth/signup');

    const signupButtonClass = computed(() => {
    return [
        $style.signupButton,
        isSignupRoute.value ? $style['signupButtonActive'] : '',
    ];
    });

    const loginButtonClass = computed(() => {
    return [
        $style.loginButton,
        !isSignupRoute.value ? $style['loginButtonActive'] : '',
    ];
    });


    console.log(route.path)
    console.log('isSignupRoute', isSignupRoute.value)
    const isSignupRoute = computed(() => route.path === '/auth/signup');

    const signupButtonClass = computed(() => {
    return [
        $style.signupButton,
        isSignupRoute.value ? $style['signupButtonActive'] : '',
    ];
    });

    const loginButtonClass = computed(() => {
    return [
        $style.loginButton,
        !isSignupRoute.value ? $style['loginButtonActive'] : '',
    ];
    });


    console.log(route.path)
    console.log('isSignupRoute', isSignupRoute.value)
</script>

<style module>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
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
        padding: 0 2rem 0 2rem;
    }

    .logoContainer {
        display: flex;
        align-items: center;
    }

    .logo {
        height: 50px;
        width: auto;
    }

    .buttonContainer {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .signupButton {
        background: none;
        border: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        padding: 8px 20px;
        color: black;
    }

    .loginButton {
        border: none;
        font-size: 18px;
        font-weight: bold;
        padding: 8px 20px;
        cursor: pointer;
        color: black;
    }
    
    .signupButtonActive {
        background-color: #4d0000;
        color: white;
        border-radius: 20px;
        padding: 8px 20px;
    }

    .loginButtonActive {
        background-color: #004d38;
        color: white;
        border-radius: 20px;
        padding: 8px 20px;
    }

    .red-bg {
        background-image: url('../assets/backgroundImages/BG Photo.png');
        background-blend-mode: multiply;
        background-size: 140%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgb(116, 0, 23);
    }

    .green-bg {
        background-image: url('../assets/backgroundImages/BG Photo.png');
        background-blend-mode: multiply;
        background-size: 140%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgb(6, 78, 0);
    }

</style>