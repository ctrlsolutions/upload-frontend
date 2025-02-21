<template>
  <form class="signup-container" v-on:submit.prevent="submitForm">
    <h1 class="title">Sign up</h1>
    <p class="subtitle">New here? Create a new account below.</p>

    <div class="form-wrapper">
      <div class="signup-form">
        <InputField
          v-model="userData.email"
          type="email"
          placeholder="Email"
          variant="red"
          width="100%"
        />
        <InputField
          v-model="userData.password"
          type="password"
          placeholder="Password"
          variant="red"
          width="100%"
        />
        <InputField
          v-model="userData.password2"
          type="password"
          placeholder="Re-enter password"
          variant="red"
          width="100%"
        />

        <div class="separator"></div>

        <div class="name-fields">
          <InputField
            v-model="userData.first_name"
            type="text"
            placeholder="First name"
            variant="red"
            width="100%"
          />
          <InputField
            v-model="userData.middle_name"
            type="text"
            placeholder="Middle name"
            variant="red"
            width="100%"
          />
        </div>
        <InputField
          v-model="userData.last_name"
          type="text"
          placeholder="Last name"
          variant="red"
          width="100%"
        />

        <div class="radio-group">
          <label class="label">Sex</label>
          <FormRadio id="M" label="Male" v-model="userData.sex" />
          <FormRadio id="F" label="Female" v-model="userData.sex" />
        </div>

        <div class="dob-group">
          <label class="label">Date of Birth</label>
          <BaseDateInput
            v-model="userData.birthdate"
            width="15rem"
            :min="'2000-01-01'"
            :max="'2020-12-31'"
          />
        </div>
      </div>
    </div>

    <div class="button-group">
      <FormButton variant="black" width="12rem">CANCEL</FormButton>
      <FormButton variant="red" width="12rem" type="submit">SUBMIT</FormButton>
    </div>

    <p class="or-text">OR</p>
    <FormButton variant="red" width="100%"
      ><v-icon name="fc-google" scale="1"></v-icon
      ><span class="google">CONTINUE WITH GOOGLE</span></FormButton
    >
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import FormRadio from '@/components/Global/BaseFormRadio.vue'
import InputField from '@/components/Global/BaseTextInput.vue'
import FormButton from '@/components/Global/BaseFormButton.vue'
import BaseDateInput from '@/components/Global/BaseDateInput.vue'

const userData = ref({
  email: '',
  password: '',
  password2: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  sex: '',
  birthdate: '',
})

const submitForm = async () => {
  console.log('DATA: ' + userData.value.email)
  console.log('DATA: ' + userData.value.password)
  console.log('DATA: ' + userData.value.password2)
  console.log('DATA: ' + userData.value.first_name)
  console.log('DATA: ' + userData.value.middle_name)
  console.log('DATA: ' + userData.value.last_name)
  console.log('DATA: ' + userData.value.sex)
  console.log('DATA: ' + userData.value.birthdate)
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/user/signup/',
      userData.value, // Ensure userData is structured correctly
      {
        headers: {
          'Content-Type': 'application/json', // Explicitly set headers (optional)
        },
      },
    )
    console.log('Success:', response.data)
  } catch (error) {
    // Better error handling
    if (error.response) {
      // Server responded with 4xx/5xx status code
      console.error('Server Error:', error.response.data)
    } else if (error.request) {
      // Request made, but no response received
      console.error('Network Error:', error.request)
    } else {
      // Other errors (e.g., Axios setup issues)
      console.error('Error:', error.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.BaseDateInput {
  margin-left: 100rem;
}

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
  padding-right: 1rem;
  margin-bottom: -2rem;
  margin-top: 2rem;
}

.cont-google {
  width: 100%;
}

.google {
  padding-left: 1.3rem;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  align-items: flex-end;

  @include sm {
    padding-left: 0.8rem;
    font-size: 0.8em;
  }

  @include md {
    padding-left: 1rem;
    font-size: 0.9em;
  }

  @include lg {
    padding-left: 1.3rem;
    font-size: 1em;
  }
}

.form-wrapper::-webkit-scrollbar {
  width: 0.5rem;
}

.form-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.form-wrapper::-webkit-scrollbar-thumb {
  background: rgba($red, 0.5);
  border-radius: 1rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.label {
  text-align: left;
  margin: 0.5rem 1rem;
  color: #6f6f6f;
  font-weight: bold;
}

.separator {
  align-self: center;
  width: 95%;
  height: 0.1rem;
  background-color: $red;
  margin: 0.5rem 0;
  opacity: 80%;
}

.name-fields {
  display: flex;
  gap: 0.5rem;
}

.dob-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -1.5rem 0;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  position: sticky;
  bottom: 0;
  background: white;
  padding: -1rem 0;
}

.or-text {
  margin: -0.2rem 0;
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.subtitle {
  font-weight: 800;
  color: #6f6f6f;
}
</style>
