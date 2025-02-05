<template>
  <div class="button-container">
    <button
      :class="['form-button form-button--red', variantClass]"
      @click="buttonStyle"
      :style="handleClick"
    >
      <slot>PLACEHOLDER</slot>
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
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

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
  width: 90%;
  max-width: 24rem;
  min-width: 12.5rem;
  min-height: 3.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
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

@media (max-width: $screen-md-min) {
  .form-button {
    width: 100%;
  }
}
</style>
