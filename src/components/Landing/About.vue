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
  align-items: flex-start;      
  justify-content: flex-start; 
  text-align: left;
  font-weight: 900;
  font-family: 'Inter', serif;
  max-width: 100%;
  padding: 30px; 
  gap: 10px; 

  //BREAKPOINTS
  @include sm {
    max-width: 90%;
    padding: 30px; 
  }

  @include md {
    max-width: 70%;
  }

  @include lg {
    max-width: 56.25rem;
  }
}

.about-content {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;

  //BREAKPOINTS
  @include sm {
    font-size: 1rem;
    line-height: 1.4;
  }

  @include md {
    font-size: 1.1rem;
  }

  @include lg {
    font-size: 1.2rem;
  }
}

.title {
  font-size: 3rem;
  font-weight: 900;
  color: maroon;
  margin-bottom: 5px; 

  //BREAKPOINTS
  @include sm {
    font-size: 2rem;
  }

  @include md {
    font-size: 2.5rem;
  }

  @include lg {
    font-size: 3rem;
  }
}
</style>
