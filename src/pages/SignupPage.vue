<template>
  <div class="signup-container">
    <h1 class="title">Sign up</h1>
    <p class="subtitle">New here? Create a new account below.</p>

    <!-- Scrollable container -->
    <div class="form-wrapper">
      <form class="signup-form">
        <InputField id="email" type="email" placeholder="Email" variant = "red" width ="100%" />
        <InputField id="password" type="password" placeholder="Password" variant="red" width="100%" />
        <InputField id="re-password" type="password" placeholder="Re-enter password" variant="red" width="100%" />

        <!-- Red horizontal line -->
        <div class="separator"></div>

        <div class="name-fields">
          <InputField id="First-name" type="First-name" placeholder="First name" variant = "red" width ="100%" />
          <InputField id="Middle-name" type="Middle-name" placeholder="Middle name" variant="red" width="100%" />

        </div>
        <InputField id="Last-name" type="Last-name" placeholder="Last name" variant="red" width="100%" />

        <!-- Sex Radio Buttons (Hidden until scrolled down) -->
        <div class="radio-group">
          <label class="label">Sex</label>
          <FormRadio id="male" label="Male" v-model="selectedSex" />
          <FormRadio id="female" label="Female" v-model="selectedSex" />
        </div>

        <!-- Date of Birth Input -->
        <div class="dob-group">
          <label class="label">Date of Birth</label>
          <input type="date" class="dob-input" />
        </div>
      </form>
    </div>

    <!-- Fixed Buttons -->
    <div class="button-group">
      <FormButton variant="black" width="12rem">CANCEL</FormButton>
      <FormButton variant="red" width="12rem">SUBMIT</FormButton>
    </div>

    <p class="or-text">OR</p>
    <FormButton variant="red" width="25rem">CONTINUE WITH GOOGLE</FormButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormRadio from '@/components/Global/BaseFormRadio.vue';
import InputField from '@/components/Global/BaseTextInput.vue';
import FormButton from '@/components/Global/BaseFormButton.vue';

const selectedSex = ref('male');

</script>

<style lang="scss" scoped>

/* Radio Button Group */
.radio-group {
    display: flex;
    align-items: center;
    gap: -0.5rem;
    margin: -0.5rem 0;
  }
  
.signup-container {
  max-width: 25rem;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: -0.5rem 0rem;
}

.form-wrapper {
  max-height: 19.5rem; 
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: -2rem;
  margin-top: 1rem; 
  // background-color: #6f6f6f;
}

.form-wrapper::-webkit-scrollbar {
  width: 8px;
}

.form-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.form-wrapper::-webkit-scrollbar-thumb {
  background: rgba($red, 0.5);
  border-radius: 4px; 
}

.form-wrapper::-webkit-scrollbar-thumb:hover {
  background: $red;  
}


.signup-form {
  display: flex;
  flex-direction: column;
  gap:1.2rem;
}

.label {
  text-align: left;
  margin: 10px 5px;
  color: #6f6f6f;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin: 6px 0;
  border: 1px solid #800000;
  border-radius: 20px; 
  font-size: 1rem;
}


.separator {
  align-self: center;
  width: 95%;
  height: 1px;
  background-color: #800000;
  margin: 10px 0;
}


.name-fields {
  display: flex;
  gap: 10px;
}


.dob-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.dob-input {
  width: 70%;
  padding: 12px;
  border: 1px solid #800000;
  border-radius: 20px; 
  font-size: 1rem;
  color: #800000;
}


.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  position: sticky;
  bottom: 0;
  background: white;
  padding: 10px 0;
}

.cancel-btn, .signup-btn, .google-btn {
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.cancel-btn {
  background-color: black;
  color: white;
  margin-right: 5px;
}

.signup-btn {
  background-color: #800000;
  color: white;
  margin-left: 5px;
}

.or-text {
  margin: -0.2rem 0;
  font-weight: bold;
}

.google-btn {
  background-color: #800000;
  color: white;
  width: 100%;
  margin-top: 10px;
}

.subtitle{
  font-weight:800;
  color:#6f6f6f;
}
</style>
