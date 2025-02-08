<template>
  <div class="static-page">
    <div class="scroll-container">
      <section class="page"><Home></Home>
      </section>
      <section class="page"><About></About></section>
      <section class="page"><Summary></Summary></section>
    </div>

    <div class="background">
      <img src="@/assets/Oble.png" class="bg-image" />
    </div>
  </div>
</template>

<script>
import BaseFormButton from '@/components/Global/BaseFormButton.vue';
import BaseNavButton from '@/components/Global/BaseNavButton.vue';
import BaseFormCheckbox from '@/components/Global/BaseFormCheckbox.vue';
import BaseFormRadio from '@/components/Global/BaseFormRadio.vue';
import Home from '@/components/Landing/Home.vue'
import About from '@/components/Landing/About.vue'
import Summary from '@/components/Landing/Summary.vue'

export default {
  components: {
    BaseFormButton,
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
      selectedValue:'',
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

/* for testing checkbox and radio*/
.form-group {
  margin: 20px 0;
}

.checkbox-group,
.radio-group {
  display: flex;
  flex-direction: row; /* Align vertically */
  gap: 10px; /* Spacing between elements */
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.form-container {
  position: absolute;
  bottom: 20px; /* Distance from bottom */
  left: 20px; /* Distance from left */
  z-index: 10; /* Ensures it is above other content */
  display: flex;
  flex-direction: column;
}

</style>


