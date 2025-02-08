<template>
  <div class="container space-y-4">
    <div class="header-logos">
      <img class="logo" src="@/assets/UP-logo.svg" />
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
  align-items: flex-start;
  min-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 25px;
  gap: 14px;
  text-align: left;
}
.title {
  font-weight: 800;
  color: $red;
  font-size: 2rem;
  max-width: 320px;
  line-height: 2.5rem;
}
.subtitle {
  font-size: small;
}
.header-logos {
  display: flex;
  flex-direction: row;
}
.logo {
  object-fit:contain;
  max-width: 70%;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
}
</style>
