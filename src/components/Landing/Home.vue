<template>
  <div class="container">
    <div class="header-logos">
      <img class="logo" src="@/assets/UP-logo.svg" />
      <img class="logo" src="@/assets/UP-logo.svg" />
    </div>
    <div class="title">
      THE OFFICIAL REPORT OF ACCOMPLISHMENT SUBMISSION PLATFORM FOR THE UP CEBU
      FACULTY
    </div>
    <div class="subtitle">Honor, Excellence, Service</div>
    <div class="buttons">
      <BaseNavButton route="/auth/login" variant="red-full"
        >Log in</BaseNavButton
      >
      <BaseNavButton route="/auth/signup" variant="green-outline"
        >Sign up</BaseNavButton
      >
    </div>
  </div>
</template>
<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue'
export default {
  name: 'HomePage',
  components: {
    BaseNavButton,
  },
}
</script>
<style lang="scss" scoped>
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 25px 0px 30px 30px;
  gap: 10px;
}
.title {
  font-weight: bolder;
  color: $red;
}
.subtitle {
  font-size: small;
}
.header-logos {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.logo {
  object-fit: contain;
  max-width: 20%;
  max-height: 100%;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
