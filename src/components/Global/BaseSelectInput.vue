<template>
  <div class="custom-dropdown">
    <select v-model="selectedValue">
      <option value="" disabled selected>Choose an option</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <i class="pi pi-angle-down dropdown-icon"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import "primeicons/primeicons.css";

const props = defineProps<{
  options: { value: string; label: string }[];
}>();

const selectedValue = ref("");
</script>

<style lang="scss" scoped>
.custom-dropdown {
  position: relative;
  display: inline-block;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0.625rem 2.5rem 0.625rem 0.625rem;
  font-size: 1rem;
  border: 0.0625rem solid $red;
  border-radius: 0.3125rem;
  background: transparent;
  cursor: pointer;
  min-width: 12.5rem;
  color: currentColor;
}

.dropdown-icon {
  position: absolute;
  right: 0.625rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: #666666;
  pointer-events: none;
}

select:hover {
  border-color: $red;
}

select:focus {
  border-color: $red;
  outline: none;
  box-shadow: 0 0 0 0.125rem rgba(123, 17, 19, 0.25);
}

select option {
  background: var(--background-color, #ffffff);
  color: var(--text-color, $red);
}

select option[value=""] {
  color: #666;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: $red;
    --text-color: #ffffff;
  }

  select {
    border-color: $red;
  }

  select:hover {
    border-color: $red;
  }

  select option[value=""] {
    color: $red;
  }

  .dropdown-icon {
    color: $red;
  }
}
</style>
