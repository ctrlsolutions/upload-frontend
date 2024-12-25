<script setup>

</script>

<template>
  <div class="my-class">Hello SCSS!</div>
</template>

<style lang="scss">
@import './styles/variables';

.my-class {
  color: $primary-color;
}
</style>