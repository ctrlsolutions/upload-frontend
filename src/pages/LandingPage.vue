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
      <!-- Circle Checkboxes: Only one can be selected at a time in name1 -->
      <BaseFormCheckbox
        id="terms"
        label="Choice 1"
        :checked="circleSelected1 === 'terms'"
        @change="selectCircle('terms', 'name1')"
        variant="circle"
      />
      <BaseFormCheckbox
        id="name2"
        label="Choice 2"
        :checked="circleSelected1 === 'name2'"
        @change="selectCircle('name2', 'name1')"
        variant="circle"
      />
      <BaseFormCheckbox
        id="name3"
        label="Choice 3"
        :checked="circleSelected1 === 'name3'"
        @change="selectCircle('name3', 'name1')"
        variant="circle"
      />
    </div>

    <!-- New Class for Another Set of Checkboxes (name2) -->
    <div class="name2">
      <!-- New Circle Checkboxes: Only one can be selected at a time in name2 -->
      <BaseFormCheckbox
        id="option1"
        label="New Choice 1"
        :checked="circleSelected2 === 'option1'"
        @change="selectCircle('option1', 'name2')"
        variant="circle"
      />
      <BaseFormCheckbox
        id="option2"
        label="New Choice 2"
        :checked="circleSelected2 === 'option2'"
        @change="selectCircle('option2', 'name2')"
        variant="circle"
      />
      <BaseFormCheckbox
        id="option3"
        label="New Choice 3"
        :checked="circleSelected2 === 'option3'"
        @change="selectCircle('option3', 'name2')"
        variant="circle"
      />
    </div>

    <!-- New Class for Square Checkbox -->
    <div class="name3">
      <!-- Square Checkbox -->
      <BaseFormCheckbox
        id="square1"
        label="Square Option 1"
        v-model="squareSelected1"
        variant="square"
      />
      <BaseFormCheckbox
        id="square2"
        label="Square Option 2"
        v-model="squareSelected2"
        variant="square"
      />
      <BaseFormCheckbox
        id="square3"
        label="Square Option 3"
        v-model="squareSelected3"
        variant="square"
      />
    </div>
</template>

<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue';
import BaseFormCheckbox from '@/components/Global/BaseFormCheckbox.vue';
import Home from '@/components/Landing/Home.vue'
import About from '@/components/Landing/About.vue'
import Summary from '@/components/Landing/Summary.vue'

export default {
  components: {
    BaseNavButton,
    BaseFormCheckbox,
    Home,
    About,
    Summary,
  },
  data() {
    return {
      // Separate selected values for each group of circle checkboxes
      circleSelected1: null, // For first group (name1)
      circleSelected2: null, // For second group (name2)
      // Separate selected values for square checkboxes
      squareSelected1: false, // For square checkbox 1
      squareSelected2: false, // For square checkbox 2
      squareSelected3: false, // For square checkbox 3
    };
  },
  methods: {
    // Handles the selection of a circle checkbox in different groups
    selectCircle(selectedId, group) {
      if (group === 'name1') {
        this.circleSelected1 = this.circleSelected1 === selectedId ? null : selectedId;
      } else if (group === 'name2') {
        this.circleSelected2 = this.circleSelected2 === selectedId ? null : selectedId;
      }
    },
  },
};
</script>

<style>
body {
  background-color: rgb(255, 255, 255); /* or #FFFFFF */
}
.static-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.scroll-container {
  display: flex;
  flex-direction: column; /* Arrange children vertically */
  scroll-snap-type: y mandatory; /* Enable vertical scroll snapping */
  scroll-snap-points-y: repeat(300px);
  overflow-y: scroll;
  width: 50vw;
  scroll-behavior: smooth; /* Smooth scrolling for snapping */
  scrollbar-width: none; /* Thin scrollbar for modern browsers */
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
