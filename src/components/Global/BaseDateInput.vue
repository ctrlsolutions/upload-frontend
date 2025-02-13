<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  theme: {
    type: Object,
    default: () => ({
      color: $red,
      radius: '0.625rem',
      fontSize: '1rem',
      padding: '0.75rem'
    })
  },
  disableFutureDates: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedDate = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const styles = computed(() => ({
  input: { 
    borderColor: props.theme.color, 
    borderRadius: props.theme.radius, 
    fontSize: props.theme.fontSize, 
    padding: props.theme.padding, 
    color: props.theme.color
  }
}));
</script>

<template>
  <div class="date-picker">
    <input 
      type="date" 
      v-model="selectedDate"
      :style="styles.input" 
      class="date-input"
      placeholder="dd/mm/yyyy"
      :max="disableFutureDates ? new Date().toISOString().split('T')[0] : undefined"
    />
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  width: 12.5rem;
  margin: 0 auto;
  padding: 0.9375rem;
}

.date-input {
  width: 100%;
  font-weight: bold;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  border: 0.125rem solid;
  background: transparent;
  cursor: pointer;
}

.date-input:focus {
  outline: none;
}

.date-input::placeholder {
  text-align: center;
  color: inherit;
  opacity: 0.7;
}
</style>
