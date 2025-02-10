<template>
    <div class="form-dropdown" :class="variantClass">
      <select :id="id" v-model="model" class="form-dropdown__select">
        <option disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineModel, computed } from 'vue';
  
  const props = defineProps({
    id: String,
    placeholder: { type: String, default: 'Select Option' },
    variant: { type: String, default: 'default' },
    options: { type: Array, default: () => ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }
  });
  
  const model = defineModel();
  const variantClass = computed(() => `form-dropdown--${props.variant}`);
  </script>
  
  <style lang="scss" scoped>
  @import './assets/scss/variables';
  
  .form-dropdown {
    width: 12.5rem;
    margin: 0 auto;
    padding: 0.9375rem;
    background: transparent;
  
    &__select {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      font-weight: bold;
      border: 0.125rem solid $red;
      border-radius: 0.625rem;
      background: transparent;
      outline: none;
      color: $red;
      text-align: center;
    }
  }
  </style>