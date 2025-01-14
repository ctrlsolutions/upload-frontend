<template>
  <div :class="$style.container">
    <h1>subcomponent</h1>
  </div>
</template>

<script setup></script>

<style module>
.container {
  border: 1px solid black;
  height: 80vh;
  flex-grow: 0.9;
}
</style>
