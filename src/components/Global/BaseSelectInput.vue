<template>
    <div class="form-dropdown" :class="variantClass">
      <div class="form-dropdown__wrapper" @click="toggleDropdown">
        <input
          type="text"
          readonly
          :id="id"
          v-model="model"
          class="form-dropdown__input"
          :placeholder="placeholder"
        />
        <div class="form-dropdown__separator">
          <div class="form-dropdown__line"></div>
          <span class="form-dropdown__arrow">▼</span>
        </div>
      </div>
      <div v-if="isOpen" class="form-dropdown__list">
        <div
          v-for="option in options"
          :key="option"
          class="form-dropdown__item"
          @click="selectOption(option)"
          :class="{ 'form-dropdown__item--selected': option === model }"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed, defineModel, ref } from 'vue';
  
  const props = defineProps({
    id: String,
    placeholder: { type: String, default: 'dd/mm/yyyy' },
    variant: { type: String, default: 'default' },
    options: { type: Array, default: () => ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }
  });
  
  const model = defineModel();
  const isOpen = ref(false);
  
  const variantClass = computed(() => `form-dropdown--${props.variant}`);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const selectOption = (option) => {
    model.value = option;
    isOpen.value = false;
  };
  </script>
  
  <style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  
  .form-dropdown {
    width: 12.5rem;
    margin: 0 auto;
    padding: 0.9375rem;
    background: transparent;
  
    &__wrapper {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      background: transparent;
    }
  
    &__input {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 0.75rem;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      border: 0.125rem solid $red;
      border-radius: 0.625rem;
      background: transparent;
      outline: none;
      color: $red;
      text-overflow: ellipsis; 
      white-space: nowrap; 
      overflow: hidden;
    }
  
    &__separator {
      position: absolute;
      right: 0.625rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: calc(100% - 1rem);
      margin: 0.5rem 0;
      pointer-events: none;
    }
  
    &__line {
      width: 0.0625rem;
      height: 1.5625rem;
      opacity: 0.5;
      background-color: $red;
    }
  
    &__arrow {
      font-size: 0.75rem;
      color: $red;
      cursor: pointer;
      pointer-events: auto;
    }
  
    &__list {
      position: absolute;
      width: 100%;
      margin-top: 0.3125rem;
      border: 0.125rem solid $red;
      border-radius: 0.625rem;
      padding: 0.3125rem;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  
    &__item {
      padding: 0.5rem 0.75rem;
      color: $red;
      cursor: pointer;
      transition: background-color 0.2s;
      text-align: left;
  
      &:hover {
        background-color: rgba($red, 0.1);
      }
  
      &--selected {
        background-color: rgba($red, 0.1);
        font-weight: bold;
      }
    }
  }
  </style>