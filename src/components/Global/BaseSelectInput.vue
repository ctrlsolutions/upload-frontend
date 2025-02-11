<template>
  <div class="custom-dropdown">
    <select v-model="selectedValue">
      <option value="" disabled selected>{{ placeholder }}</option>
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
  placeholder?: string;
}>();

const selectedValue = ref("");
</script>

<style lang="scss" scoped>

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// Mixins
@mixin sm {
  @media (min-width: #{$breakpoint-sm}) {
    @content;
  }
}

@mixin md {
  @media (min-width: #{$breakpoint-md}) {
    @content;
  }
}

@mixin lg {
  @media (min-width: #{$breakpoint-lg}) {
    @content;
  }
}

.custom-dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
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
  width: 100%;
  color: #ffffff;

  @include sm {
    min-width: 10rem;
    padding: 0.2rem 1.3rem;
    font-size: 0.8em;
  }

  @include md {
    min-width: 12rem;
    padding: 0.3rem 1.5rem;
    font-size: 1em;
  }

  @include lg {
    min-width: 13rem;
    padding: 0.15rem 2rem;
    font-size: 1.3em;
  }

  &:not([value=""]) {
    color: #ffffff;
    font-weight: 500;
  }
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

  &:checked {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
}

select option[value=""] {
  color: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: $red;
    --text-color: #ffffff;
  }

  select {
    border-color: $red;

    &:not([value=""]) {
      color: #ffffff;
    }
  }

  select:hover {
    border-color: $red;
  }

  select option[value=""] {
    color: #ffffff;
  }

  select option:checked {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  .dropdown-icon {
    color: $red;
  }
}
</style>