<template>
    <div :class="$style.container">
        <h1>subcomponent</h1>
        <br>
        <BaseFormButton />
    </div>
</template>

<script setup>
import BaseFormButton from '@/components/Global/BaseFormButton.vue';

</script>

<style module>
    .container{
        border: 1px solid black;
        height: 80vh;
        flex-grow: 0.9;

    }
</style>
