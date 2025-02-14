<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '12.5rem'
  },
  color: {
    type: String,
    default: '#751113'
  }
});

const emit = defineEmits(['update:modelValue']);

const styles = computed(() => ({
  input: { 
    fontFamily: "'Inter', sans-serif",
    borderColor: props.color,
    borderRadius: '0.625rem',
    fontSize: '1rem',
    padding: '0.75rem',
    color: props.color,
    paddingRight: 'calc(0.75rem * 3)'
  }
}));

const updateDate = ({ target: { value } }) => {
  if (!value) return;
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="date-picker" :style="{ width: width }">
    <div class="input-wrapper">
      <input 
        type="date" 
        :value="modelValue" 
        @input="updateDate" 
        :style="styles.input" 
        class="date-input"
      />
      <div class="dropdown-toggle" :style="{ right: '0.75rem' }">
        <i class="pi pi-calendar-minus dropdown-icon" :style="{ color }"></i>
      </div>
    </div>
  </div>
</template>

<style lang="lang" scoped>
.date-picker {
  margin: 0 auto;
  padding: 0.9375rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.date-input {
  width: 100%;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-align: center;
  border: 0.125rem solid;
  background: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}

.date-input:focus {
  outline: none;
  border-color: v-bind('color');
}

.date-input::-webkit-calendar-picker-indicator {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}

.dropdown-toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.dropdown-icon {
  font-size: 1rem;
}
</style>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: 'red'
  },
  width: {
    type: String,
    default: '12.5rem'
  }
});

const emit = defineEmits(['update:modelValue']);

const styles = computed(() => ({
  input: { 
    border: `1px solid ${props.color}`,
    borderRadius: '0.625rem',
    fontSize: '1rem',
    padding: '0.75rem',
    color: props.color,
    paddingRight: '2.25rem'
  }
}));

const updateDate = ({ target: { value } }) => {
  if (!value) return;
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="date-picker" :style="{ width: width }">
    <div class="input-wrapper">
      <input 
        type="date" 
        :value="modelValue" 
        @input="updateDate" 
        :style="styles.input" 
        class="date-input"
      />
      <div class="dropdown-toggle" :style="{ right: '0.75rem' }">
        <v-icon name="bi-calendar-minus-fill" scale="1.2"></v-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

::v-deep(svg) {
  fill: $red !important;
}


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
  border: 0.125rem solid;
  background: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-color: $red;
  color: $red;
}

.date-input:focus {
  border-color: $red;
  color: $red;
}

.date-input::-webkit-calendar-picker-indicator {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}

.dropdown-toggle {
  position: absolute;
  top: 50%;
  right:0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 100;
}

.dropdown-icon {
  font-size: 1rem;
}
</style>