<template>
  <div class="static-page">
    <div class="scroll-container">
      <section class="page"><Home></Home></section>
      <section class="page"><About></About></section>
      <section class="page"><Summary></Summary></section>
    </div>

    <div class="background">
      <img src="@/assets/Oble.png" class="bg-image" />
    </div>
  </div>
  <div class="name1">
      <BaseFormRadio
        v-model="selectedValue"
        id="radio1"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <BaseFormRadio
        v-model="selectedValue"   
        id="radio2"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <BaseFormRadio
        v-model="selectedValue"   
        id="radio3"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>

    <div class="name3">
      <BaseFormCheckbox
        id="square1"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        v-model="squareSelected1"
      />
      <BaseFormCheckbox
        id="square2"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        v-model="squareSelected2"
      />
      <BaseFormCheckbox
        id="square3"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        v-model="squareSelected3"
      />
    </div>
</template>

<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue';
import BaseFormCheckbox from '@/components/Global/BaseFormCheckbox.vue';
import BaseFormRadio from '@/components/Global/BaseFormRadio.vue';
import Home from '@/components/Landing/Home.vue'
import About from '@/components/Landing/About.vue'
import Summary from '@/components/Landing/Summary.vue'

export default {
  components: {
    BaseNavButton,
    BaseFormCheckbox,
    BaseFormRadio,
    Home,
    About,
    Summary,
  },
  data() {
    return {
      squareSelected1: false, // Do not remove: Needed for testing the checkbox and radio buttons
      squareSelected2: false, // Do not remove: Needed for testing the checkbox and radio buttons
      squareSelected3: false, // Do not remove: Needed for testing the checkbox and radio buttons
      selectedValue:'', // Do not remove: Needed for testing the checkbox and radio buttons
    };
  },
};
</script>

<style>
body {
  background-color: rgb(255, 255, 255);
}
.static-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.scroll-container {
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory; 
  scroll-snap-points-y: repeat(300px);
  overflow-y: scroll;
  width: 50vw;
  scroll-behavior: smooth; 
  scrollbar-width: none; 
}
.page {
  background-color: white;
  scroll-snap-align: start;
  background-color: transparent;
  display: flex;
  height: 100vh;
}
.background {
  z-index: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50vw;
  height: 100vh;
  pointer-events: auto;
}
.bg-image {
  width: auto;
  height: 100vh;
  object-fit: contain;
}
</style>
