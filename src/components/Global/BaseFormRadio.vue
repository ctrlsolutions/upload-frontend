<template>
    <div class="form-radio" :class="variantClass">
        <input
            type="radio"
            :id="id"
            :value="id"
            v-model="model"
        />
        <label :for="id">
            <slot>{{ label }}</slot>
        </label>
    </div>
</template>

<script setup>
import { defineProps, computed, defineModel } from 'vue';

const props = defineProps({
    id: String,
    label: { type: String, default: '' },
    variant: { type: String, default: 'circle' },
});

const model = defineModel();

const variantClass = computed(() => `form-radio--${props.variant}`);
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.form-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;

    input[type='radio'] {
        flex-shrink: 0;
        appearance: none;
        width: 1rem; 
        height: 1rem;
        cursor: pointer;
        border: 0.1rem solid $red;
        border-radius: 50%;
        position: relative;
        transition: all 0.3s ease;
    }

    input[type='radio']:checked::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.56rem;
        height: 0.56rem;
        background-color: $red;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    label {
        margin-top: 2rem;
        margin-left: 0.5rem;
        font-weight: bold;
        color: #9e2323;
    }
}
</style>
