<template>
  <div class="button-container">
    <button class="action-button danger-button" tabindex="0">PLACEHOLDER</button>
    <button class="action-button success-button" tabindex="0">PLACEHOLDER</button>
  </div>
</template>

<style scoped>

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%; /* Ensures it takes full width but remains centered */
  max-width: 450px; /* Prevents it from getting too wide */
  margin: 0 auto; /* Centers it horizontally */
}

/* Button styles */
.action-button {
  width: 90%; /* Makes the button responsive within the container */
  max-width: 391px; /* Prevents excessive stretching */
  min-width: 200px; /* Ensures it doesn't get too small */
  border: none;
  border-radius: 15px; /* Consistent rounded corners */
  min-height: 57px;
  padding: 19px;
  cursor: pointer;
  font: 800 16px Inter, sans-serif;
  color: #fff;
  text-align: center;
}

/* Button colors */
.danger-button {
  background-color: rgb(123, 17, 19);
}

.success-button {
  background-color: rgb(1, 68, 33);
  margin-top: 18px;
}

/* Button focus and hover states */
.action-button:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.action-button:hover {
  opacity: 0.9;
}

</style>
