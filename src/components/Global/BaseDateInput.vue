<template>
  <div class="date-picker" :style="{ width: width }">
    <div class="input-wrapper">
      <input
        ref="inputRef"
        type="date"
        class="date-input"
        v-bind="$attrs"
      />
      <div class="dropdown-toggle" @click="openCalendar">
        <font-awesome-icon :icon="['fas', 'calendar-alt']" style="color: #751113;" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const inputRef = ref(null)

const props = defineProps({
  width: {
    type: String,
    default: '12.5rem'
  }
})
</script>

<style lang="scss" scoped>

.date-picker {
  margin: 0 auto;
  padding: 0.9375rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
}

.date-input {
  width: 100%;
  font-weight: bold;
  text-align: center;
  border: 0.125rem solid $red;
  background: transparent;
  cursor: text;
  border-radius: 0.625rem;
  padding: 0.75rem;
  color: $red;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'Inter', sans-serif;
}

.date-input:focus {
  outline: none;
  border-color: $red;
}

.date-input::-webkit-calendar-picker-indicator {
  display: none;
}

.dropdown-toggle {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: auto;
  z-index: 100;
}
</style>
