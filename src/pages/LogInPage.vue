<template>
  <div class="container">
    <div class="header">
      <h1>Log in</h1>
    </div>
      <p>Welcome! Log in to access your dashboard.</p>
    <div class="input-group">
      <BaseTextInput id="email" type="email" placeholder="Email" variant="green" width="30rem" height="3.5rem"/>
      <BaseTextInput id="password" type="password" placeholder="Password" variant="green" width="30rem" height="3.5rem"/>
    </div>
    <div class="forgot-password">
      <a href="#">Forgot Password?</a>
    </div>
    <div class="login-button">
      <BaseFormButton variant="green" width="30rem">LOG IN</BaseFormButton>
    </div>
    <div class="or-text">
      <p>OR</p>
    </div>
    <div class="cont-google">
      <BaseFormButton variant="red" width="30rem"><v-icon name="fc-google" scale="1.2"></v-icon><span class="google">CONTINUE WITH GOOGLE</span></BaseFormButton>
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

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;

  @include sm {
    max-width: 300px;
    padding: 1rem;
  }

  @include md {
    max-width: 350px;
    padding: 1.5rem;
  }

  @include lg {
    max-width: 400px;
    padding: 2rem;
  }
}

.header {
  align-self: center;
  font-size: 2rem;
  font-weight: 800;

  @include sm {
    font-size: 1.5rem;
  }

  @include md {
    font-size: 1.75rem;
  }

  @include lg {
    font-size: 2rem;
  }

  h1 {
    font-weight: 800;
  }
}

.input-group {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @include sm {
    width: 15rem;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  @include md {
    width: 20rem;
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  @include lg {
    width: 30rem;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
}

.login-button {
  width: 30rem;

  @include sm {
    width: 15rem;
  }

  @include md {
    width: 20rem;
  }

  @include lg {
    width: 30rem;
  }
}

.or-text {
  margin-bottom: 1rem;

  @include sm {
    margin-bottom: 0.5rem;
    font-size: 0.9em;
  }

  @include md {
    margin-bottom: 0.75rem;
    font-size: 1em;
  }

  @include lg {
    margin-bottom: 1rem;
    font-size: 1em;
  }
}

.forgot-password {
  width: 30rem;     
  text-align: right;   
  margin-top: -0.5rem; 
  padding-right: 1rem;
  margin-bottom: 1.5rem;

  @include sm {
    width: 15rem;
    padding-right: 0.5rem;
    margin-bottom: 1rem;
  }

  @include md {
    width: 20rem;
    padding-right: 0.75rem;
    margin-bottom: 1.25rem;
  }

  @include lg {
    width: 30rem;
    padding-right: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: $green;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }

    @include sm {
      font-size: 0.8rem;
    }

    @include md {
      font-size: 0.85rem;
    }

    @include lg {
      font-size: 0.9rem;
    }
  }
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
</style>