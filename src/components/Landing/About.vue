<template>
  <div class="about-container">
    <h1 class="title">ABOUT</h1>
    <p class="about-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie dictum blandit. Vivamus tempus urna ut quam hendrerit rutrum eget sed orci. Nullam tincidunt vitae ligula nec tempor. Maecenas dapibus mauris sed sapien pretium aliquet. Nullam pellentesque pulvinar risus, eu vestibulum nibh consequat blandit. Pellentesque egestas erat sed vestibulum interdum. Aenean accumsan metus aliquet placerat cursus. Cras facilisis lacus ut elit imperdiet, at ornare lacus laoreet. Donec interdum justo nec porta luctus. Pellentesque pretium tempor eros. Curabitur in velit tincidunt, ullamcorper diam et, faucibus eros. Cras fringilla nibh vel diam pretium porttitor. Nullam finibus eu enim non aliquet.
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
  justify-content: center; 
  text-align: left;
  font-family: 'Inter', sans-serif;
  max-width: 100%;
  min-height: 100vh; 
  padding: 30px; 
  padding-left: 90px;
  gap: 10px; 

  // BREAKPOINTS
  @include sm {
    max-width: 90%;
    padding-left: 90px; 
  }

  @include md {
    max-width: 70%;
    padding-left: 90px; 
  }

  @include lg {
    max-width: 56.25rem;
    padding-left: 90px; 
  }
}

.about-content {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  max-width: 80%; 

  // BREAKPOINTS
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
  font-weight: 800; 
  color: maroon;
  margin-bottom: 0px;

  // BREAKPOINTS
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
