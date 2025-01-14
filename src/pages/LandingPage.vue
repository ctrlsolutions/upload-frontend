<template>
  <div class="i">
    <BaseNavButton route="/login" variant="red-full" width="10px" height="4px"
      >Log in</BaseNavButton
    >
    <BaseNavButton route="/about" variant="green-full"
      >Placeholder</BaseNavButton
    >
    <BaseNavButton route="/profile" variant="red-outline"
      >Placeholder</BaseNavButton
    >
    <BaseNavButton route="/signup" variant="green-outline"
      >Sign up</BaseNavButton
    >
    <BaseNavButton route="/settings" variant="empty">Placeholder</BaseNavButton>
  </div>
</template>

<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue'

export default {
  components: {
    BaseNavButton,
  },
}
</script>
<style>
body {
  background-color: white; /* or #FFFFFF */
}
.i {
  display: flex;
  flex: 1;
  gap: 3px;
  flex-direction: row;
  height: auto;
  width: auto;
}
</style>
