<template>
  <div class="about-container">
    <h1 class="title">ABOUT</h1>
    <p class="about-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss">
.about-container {
  display: flex;           
  flex-direction: column; 
  align-items: left;      
  justify-content: left; 
  text-align: left;
  font-weight: 900;
  font-family: 'Inter', serif;
  max-width: 56.25rem;
  margin: 0 auto; 
  padding: 30px; 
  gap: px; /* Adds spacing between elements */
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  color: maroon;
  margin-bottom: 5px; 
}



</style>
