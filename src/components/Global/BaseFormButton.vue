<template>
  <div class="button-container">
    <button
      :class="['form-button', variantClass]"
      @click="handleClick"
      :style="buttonStyle"
    >
    <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: '3.5rem',
    },
  },
  computed: {
    variantClass() {
      return this.variant ? `form-button--${this.variant}` : '';
    },
    buttonStyle() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  methods: {
    handleClick() {
      this.defineEmit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.form-button {
  border: none;
  border-radius: 1rem;
  padding: 1.2rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: #fff;
  text-align: center;
  width: 24rem;
  max-width: 24rem;
  min-width: 12.5rem;
  min-height: 3.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;

  @include sm {
    width: 20rem;
  }

  @include md {
    width: 22rem;
  }

  @include lg {
    width: 23rem;
  }

  @include xl {
    width: 24rem;
  }
}

.form-button--red {
  background-color: $red;
}

.form-button--green {
  background-color: $green;
  margin-top: 0.8rem;
}

.form-button--black {
  background-color: $black;
  margin-top: 0.8rem;
}

.form-button:hover {
  opacity: 0.9;
}

.form-button:focus {
  outline: 0.125rem solid #fff;
  outline-offset: 0.125rem;
}
</style>
