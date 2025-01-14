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
      <BaseFormCheckbox
        id="terms"
        label="Choice"
        v-model="name1"
        variant="circle"
      />
      <BaseFormCheckbox
        id="name2"
        label="Choice"
        v-model="name2"
        variant="square"
      />
      <BaseFormCheckbox
        id="name3"
        label="Choice"
        v-model="name3"
        variant="circle"
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
      name1: false,
      name2: false,
      name3: false,
    };
  },
};
</script>

<style>
body {
  background-color: rgb(255, 255, 255); /* or #FFFFFF */
}

.i {
  display: flex;
  flex: 1;
  gap: 3px;
  flex-direction: row;
  height: auto;
  width: auto;
}

.checkboxes {
  margin-top: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
}
</style>
