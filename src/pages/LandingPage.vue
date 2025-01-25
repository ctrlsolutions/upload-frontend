<template>
  <div class="i">
    <BaseNavButton route="/login" variant="red-full" width="10px" height="4px">
      Log in
    </BaseNavButton>
    <BaseNavButton route="/about" variant="green-full">
      Placeholder
    </BaseNavButton>
    <BaseNavButton route="/profile" variant="red-outline">
      Placeholder
    </BaseNavButton>
    <BaseNavButton route="/signup" variant="green-outline">
      Sign up
    </BaseNavButton>
    <BaseNavButton route="/settings" variant="empty">
      Placeholder
    </BaseNavButton>

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
  </div>
</template>

<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue';
import BaseFormCheckbox from '@/components/Global/BaseFormCheckbox.vue';

export default {
  components: {
    BaseNavButton,
    BaseFormCheckbox,
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

.i {
  flex: wrap;
  gap: 1rem;
  align-items: center;
  flex-direction: row;
}

.checkboxes {
  margin-top: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
}

.name2 {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.name3 {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
