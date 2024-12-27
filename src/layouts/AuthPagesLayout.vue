<template>
    <div :class="[$style.container, backgroundStyle ? $style['red-bg'] : $style['blue-bg']]">
        <main :class="$style['content-container']">
            <img src="../assets/backgroundImages/oble_closeup.png" :class="$style.img">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

const backgroundStyle = computed(() => {
    const segments = route.path.split('/');
    const lastSegment = segments[segments.length - 1];

    // Return just the class name as a string
    if (lastSegment === 'signup') return true;
    return false;
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

.red-bg {
    background-image: url('../assets/backgroundImages/bg_red.png');

}

.blue-bg {
    background-image: url('../assets/backgroundImages/bg_green.png');

}

.img {
    height: 98%;

    border-radius: 36px;
}
</style>
