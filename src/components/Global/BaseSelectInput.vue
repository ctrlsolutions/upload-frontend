<template>
  <div class="form-dropdown" :class="`form-dropdown--${variant}`">
    <div class="form-dropdown__wrapper" @click="isOpen = !isOpen">
      <div class="form-dropdown__selected">{{ model || placeholder }}</div>
      <div class="form-dropdown__arrow" :style="{ backgroundImage: chevronUrl }"></div>
    </div>
    <div v-show="isOpen" class="form-dropdown__options">
      <div class="form-dropdown__option" @click="selectOption('')">{{ placeholder }}</div>
      <div v-for="option in options" :key="option" class="form-dropdown__option" @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineModel, ref } from 'vue';
import { ref, computed } from 'vue';
import { cilChevronBottom } from '@coreui/icons';


defineProps({
  placeholder: { type: String, default: 'Select Option' },
  variant: { type: String, default: 'default' },
  options: { type: Array, default: () => ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] },
});

const model = defineModel({ default: '' });
const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  model.value = option;
  isOpen.value = false;
};

const chevronSvg = encodeURIComponent(cilChevronBottom[1]);
const chevronUrl = computed(() => `url("data:image/svg+xml;charset=UTF-8,${chevronSvg}")`);
</script>

<style lang="scss" scoped>
.form-dropdown {
  width: 12.5rem;
  padding: 0.9375rem;
  position: relative;
}

.form-dropdown__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  font-weight: bold;
  border: 2px solid $red;
  border-radius: 0.625rem;
  background: white;
  cursor: pointer;
}

.form-dropdown__arrow {
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}


.form-dropdown__options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border: 2px solid $red;
  border-radius: 0.625rem;
  z-index: 10;
}

.form-dropdown__option {
  padding: 0.75rem;
  text-align: center;
  cursor: pointer;
}

.form-dropdown__option:hover {
  background: $red;
}
</style>
