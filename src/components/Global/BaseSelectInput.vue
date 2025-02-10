<template>
    <div class="form-dropdown" :class="variantClass">
      <div class="form-dropdown__wrapper" @click="isOpen = !isOpen">
        <div class="form-dropdown__selected">
          {{ model || placeholder }}
        </div>
        <div class="form-dropdown__button-separator"></div>
        <div class="form-dropdown__arrow"></div>
      </div>
      <div v-if="isOpen" class="form-dropdown__options">
        <div class="form-dropdown__placeholder-option">{{ placeholder }}</div>
        <div class="form-dropdown__separator"></div>
        <div 
          v-for="option in options" 
          :key="option" 
          class="form-dropdown__option"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineModel, ref, computed } from 'vue';
  
  const props = defineProps({
    id: String,
    placeholder: { type: String, default: 'Select Option' },
    variant: { type: String, default: 'default' },
    options: { type: Array, default: () => ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }
  });
  
  const model = defineModel({ default: '' });
  const isOpen = ref(false);
  const variantClass = computed(() => `form-dropdown--${props.variant}`);
  
  const selectOption = (option) => {
    model.value = option;
    isOpen.value = false;
  };
  </script>
  
  <style lang="scss" scoped>
  .form-dropdown {
    width: 12.5rem;
    margin: 0 auto;
    padding: 0.9375rem;
    position: relative;
  }
  
  .form-dropdown__wrapper {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    border: 0.125rem solid #ff0000;
    border-radius: 0.625rem;
    background: white;
    color: $red;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 0.75rem;
  }
  
  .form-dropdown__selected {
    flex: 1;
    text-align: center;
  }
  
  .form-dropdown__button-separator {
    width: 1px;
    height: 4rem;
    background-color: $red;
  }
  
  .form-dropdown__arrow {
    width: 1em;
    height: 1em;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  
  .form-dropdown__options {
    position: absolute;
    top: calc(100% - 0.5rem);
    left: 0.9375rem;
    right: 0.9375rem;
    background: white;
    border: 0.125rem solid #ff0000;
    border-radius: 0.625rem;
    z-index: 10;
  }
  
  .form-dropdown__placeholder-option {
    padding: 0.75rem;
    color: $red;
    font-weight: bold;
    text-align: center;
  }
  
  .form-dropdown__separator {
    height: 1px;
    background-color: #ff0000;
    margin: 0 0.75rem;
  }
  
  .form-dropdown__option {
    padding: 0.75rem;
    color: $red;
    text-align: center;
    cursor: pointer;
  }
  
  .form-dropdown__option:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
  </style>