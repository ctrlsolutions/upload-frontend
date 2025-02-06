<template>
  <div class="app-container">
    <div class="date-picker-container">
      <div class="date-input-wrapper">
        <input type="date" :value="selectedDate" @input="updateDate" class="date-input" @click="toggleCalendar"/>
        <div class="separator-dropdown-container">
          <div class="separator"></div>
          <span class="dropdown" @click="toggleCalendar">▼</span>
        </div>
        <div v-if="activeCalendar" class="calendar-dropdown">
          <div class="calendar-header">
            <button @click="changeMonth(-1)">←</button>
            <span>{{ currentMonth }} {{ currentYear }}</span>
            <button @click="changeMonth(1)">→</button>
          </div>
          <div class="calendar-days">
            <div class="weekday" v-for="day in weekDays" :key="day"
            >
              {{ day }}
            </div>
            <template v-for="i in firstDayOfMonth" :key="`empty-${i}`">
              <div class="calendar-date empty"></div>
            </template>
            <div
              v-for="date in calendarDates"
              :key="date"
              class="calendar-date"
              @click="selectDate(date)"
            >
              {{ new Date(date).getDate() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedDate = ref('');
const activeCalendar = ref(false);
const currentDate = ref(new Date());
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const currentMonth = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long' });
});

const currentYear = computed(() => {
  return currentDate.value.getFullYear();
});

const firstDayOfMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  return new Date(year, month, 1).getDay();
});

const calendarDates = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1).toISOString().split('T')[0]);
});

const toggleCalendar = () => {
  activeCalendar.value = !activeCalendar.value;
};

const changeMonth = (delta) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + delta);
  currentDate.value = newDate;
};

const selectDate = (date) => {
  selectedDate.value = date;
  activeCalendar.value = false;
};

const updateDate = (event) => {
  const isoDate = event.target.value;
  if (isoDate) {
    const [year, month, day] = isoDate.split("-");
    selectedDate.value = `${month}/${day}/${year}`;
  }
};
</script>

<style scoped lang="scss">
$primary-color: $red;
$font-size: var(--font-size); //kalimot ko unsay i butang ari
$button-size: var(--button-size); //diri pud

.app-container {
  padding: 15px;
  width: 200px;
  margin: 0 auto;
  background: transparent;
}

.date-picker-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: transparent;
}

.date-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
}

.date-input {
  width: 100%;
  font-weight: bold;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  border: 2px solid $primary-color;
  background: transparent;
  color: $primary-color;
  font-size: $font-size;
}

.date-input::-webkit-calendar-picker-indicator {
  display: none;
}

.separator-dropdown-container {
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: calc(100% - 16px);
  margin: 8px 0;
}

.separator {
  width: 1px;
  height: 45px;
  opacity: 0.5;
  background-color: $primary-color;
}

.dropdown {
  cursor: pointer;
  font-size: 12px;
  color: $primary-color;
}

.calendar-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 5px;
  border: 2px solid $primary-color;
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 277px;
  height: 310px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.calendar-header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: $button-size;
  padding: 5px 10px;
  color: $primary-color;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.weekday {
  text-align: center;
  font-weight: bold;
  font-size: 0.9em;
  padding: 5px;
  color: $primary-color;
}

.calendar-date {
  text-align: center;
  padding: 5px;
  cursor: pointer;
  color: $primary-color;
}

.calendar-date:hover {
  border-radius: 50px;
  background: rgba(117, 17, 19, 0.1);
}
</style>
