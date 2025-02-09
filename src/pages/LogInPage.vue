<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <h1><b>Log in</b></h1>
    </div>
      <p>Welcome! Log in to access your dashboard.</p>
    <div :class="$style.emailInput">
      <BaseTextInput id="email" type="email" placeholder="Email" variant="green"/>
    </div>
    <div :class="$style.passwordInput">
      <BaseTextInput id="password" type="password" placeholder="Password" variant="green" />
    </div>
    <div class="forgot-password" :class="$style.forgotPassword">
      <a href="#">Forgot Password?</a>
    </div>
    <div :class="$style.loginbutton">
      <BaseFormButton variant="green">LOG IN</BaseFormButton>
    </div>
    <div :class="$style.orText">
      <p>OR</p>
    </div>
    <div :class="$style.contgoogle">
      <BaseFormButton variant="red">CONTINUE WITH GOOGLE</BaseFormButton>
    </div>
  </div>
</template>

<script>
import BaseTextInput from "@/components/Global/BaseTextInput.vue";
import BaseFormButton from "@/components/Global/BaseFormButton.vue";

export default {
  components: {
    BaseTextInput,
    BaseFormButton,
  },
};
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
}

.header{
  align-self: center;
  font-size: 2rem;
  font-weight: bolder;
}

.emailInput{
  width: 30rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.passwordInput{
  width: 30rem;
  margin-bottom: 1rem;
}

.loginbutton{
  width: 16rem;

}

.orText{
  margin-bottom: 1rem;
}

.forgotPassword {
  width: 30rem;     
  text-align: right;   
  margin-top: -0.5rem; 
  padding-right: 1rem;
  margin-bottom: 1rem;
}

.forgot-password a {
  color: #014421;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
