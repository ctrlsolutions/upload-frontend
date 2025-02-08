<template>
  <div class="container">
    <div class="header-logos">
      <img class="UPlogo" src="@/assets/UP-logo.svg" />
      <img class="UPloadlogo" src="@/assets/UPloadLogo.svg" />
    </div>
    <div class="title">
      THE OFFICIAL REPORT OF ACCOMPLISHMENT SUBMISSION PLATFORM FOR THE UP CEBU
      FACULTY
    </div>
    <div class="subtitle">Honor, Excellence, Service</div>
    <div class="buttons">
      <BaseNavButton route="/auth/login" variant="red-full">
        Log in
      </BaseNavButton>
      <BaseNavButton route="/auth/signup" variant="green-outline">
        Sign up
      </BaseNavButton>
    </div>
  </div>
</template>

<script>
import BaseNavButton from '@/components/Global/BaseNavButton.vue';
export default {
  name: 'HomePage',
  components: {
    BaseNavButton,
  },
};
</script>

<style lang="scss" scoped>
.header-logos {
  display: flex;
}
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 25px 0px 150px 50px;
  gap: 20px;
}
.title {
  font-weight: 800;
  color: $red;
  font-size: 2.5rem;
  max-width: 340px;
  line-height: 2.8rem;
}
.subtitle {
  font-size: medium;
}
.header-logos {
  align-self: center;
  display: flex;
  width: 499px;
  max-width: 100%;
  align-items: start;
  margin-bottom: 50px;
}
.UPlogo {
  object-fit:contain;
  width: 15%;
  row-gap: 2px;
}
.UPloadlogo {
  object-fit:contain;
  width: 18%;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
}
</style>
