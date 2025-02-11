<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  theme: {
    type: Object,
    default: () => ({
      color: '#751113',
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

const activeCalendar = ref(false);
const currentDate = ref(new Date());
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const styles = computed(() => ({
  input: { 
    borderColor: props.theme.color, 
    borderRadius: props.theme.radius, 
    fontSize: props.theme.fontSize, 
    padding: props.theme.padding, 
    color: props.theme.color, 
    paddingRight: `calc(${props.theme.padding} * 3)` 
  },
  dropdown: { 
    borderColor: props.theme.color, 
    borderRadius: props.theme.radius 
  }
}));

const currentMonth = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());
const firstDayOfMonth = computed(() => new Date(currentYear.value, currentDate.value.getMonth(), 1).getDay());
const calendarDates = computed(() => Array.from(
  { length: new Date(currentYear.value, currentDate.value.getMonth() + 1, 0).getDate() }, 
  (_, i) => {
    const date = new Date(currentYear.value, currentDate.value.getMonth(), i + 1);
    date.setHours(12, 0, 0, 0);
    return date;
  }
));

const isDateDisabled = (date) => {
  if (!props.disableFutureDates) return false;
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return date > today;
};

const handleClickOutside = (event) => {
  if (!document.querySelector('.calendar')?.contains(event.target) && 
      !document.querySelector('.date-input')?.contains(event.target)) {
    activeCalendar.value = false;
  }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));

const toggleCalendar = () => (activeCalendar.value = !activeCalendar.value);

const changeMonth = (delta) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + delta);
  
  if (props.disableFutureDates) {
    const today = new Date();
    if (newDate > today) return;
  }
  
  currentDate.value = newDate;
};

const selectDate = (date) => {
  if (isDateDisabled(date)) return;
  const localDate = new Date(date);
  localDate.setHours(12, 0, 0, 0); // Set to noon to avoid timezone issues
  selectedDate.value = localDate.toISOString().split('T')[0];
  activeCalendar.value = false;
};

const updateDate = ({ target: { value } }) => {
  if (!value) return;
  const dateObj = new Date(value);
  if (props.disableFutureDates) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateObj > today) return;
  }
  selectedDate.value = value;
};
</script>

<template>
  <div class="date-picker">
    <div class="input-wrapper">
      <input 
        type="date" 
        :value="selectedDate" 
        @input="updateDate" 
        @click="toggleCalendar" 
        :style="styles.input" 
        class="date-input" 
        placeholder="dd/mm/yyyy"
        :max="disableFutureDates ? new Date().toISOString().split('T')[0] : undefined"
      />
      <div class="dropdown-toggle" :style="{ right: theme.padding }">
        <i class="pi pi-calendar-minus dropdown-icon" @click="toggleCalendar" :style="{ color: theme.color }"></i>
      </div>
    </div>
    <div v-if="activeCalendar" class="calendar" :style="styles.dropdown" @click.stop>
      <header>
        <button @click="changeMonth(-1)">
          <i class="pi pi-arrow-left" :style="{ color: theme.color }"></i>
        </button>
        <span>{{ currentMonth }} {{ currentYear }}</span>
        <button @click="changeMonth(1)" :disabled="disableFutureDates && currentDate.getMonth() === new Date().getMonth()">
          <i class="pi pi-arrow-right" :style="{ color: theme.color }"></i>
        </button>
      </header>
      <div class="calendar-grid">
        <div v-for="day in weekDays" :key="day" class="weekday">{{ day }}</div>
        <div v-for="i in firstDayOfMonth" :key="`empty-${i}`" class="date empty"></div>
        <div 
          v-for="date in calendarDates" 
          :key="date" 
          class="date" 
          :class="{ 'disabled': isDateDisabled(date) }"
          @click="selectDate(date)"
        >
          {{ date.getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-picker {
  width: 12.5rem;
  margin: 0 auto;
  padding: 0.9375rem;
  position: relative;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  font-weight: bold;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  border: 0.125rem solid;
  background: transparent;
  cursor: pointer;
}

input:focus {
  outline: none;
  border-color: v-bind('theme.color');
}

input::placeholder {
  text-align: center;
  color: inherit;
  opacity: 0.7;
}

input::-webkit-calendar-picker-indicator { display: none; }

.dropdown-toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.dropdown-icon {
  cursor: pointer;
  font-size: 1rem;
  pointer-events: auto;
}

.calendar {
  position: absolute;
  top: calc(100% - 0.6rem);
  left: 0;
  right: 0;
  padding: 0.625rem;
  border: 0.125rem solid;
  background: white;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: max-content;
  min-width: 16rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
  font-weight: bold;
  color: v-bind('theme.color');
}

header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.3125rem 0.625rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

header button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 2.5rem);
  gap: 0.3rem;
}

.weekday, .date {
  text-align: center;
  padding: 0.3125rem;
  color: v-bind('theme.color');
}

.weekday {
  font-weight: bold;
  font-size: 0.9em;
}

.date {
  cursor: pointer;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.date:not(.empty):not(.disabled):hover {
  border-radius: 0.5rem; 
  background: rgba(117, 17, 19, 0.1);
}

.date.empty {
  cursor: default;
}

.date.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>