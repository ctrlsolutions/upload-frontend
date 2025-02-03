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
@use '../styles/_mixins' as mixins; 


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
  gap: 10px; 

  //BREAKPOINTS

  @include mixins.sm {
    max-width: 90%;
    padding: 20px; 
  }

  @include mixins.md {
    max-width: 70%;
  }

  @include mixins.lg {
    max-width: 56.25rem;
  }

}

.about-content {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;

  //BREAKPOINTS

  @include mixins.sm {
    font-size: 1rem;
    line-height: 1.4;
  }

  @include mixins.md {
    font-size: 1.1rem;
  }

  @include mixins.lg {
    font-size: 1.2rem;
  }
}

.title {
  font-size: 3rem;
  font-weight: 900;
  color: maroon;
  margin-bottom: 5px; 

  //BREAKPOINTS

   @include mixins.sm {
    font-size: 2rem;
  }

  @include mixins.md {
    font-size: 2.5rem;
  }

  @include mixins.lg {
    font-size: 3rem;
  }

}



</style>
