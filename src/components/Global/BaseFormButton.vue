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
  },
  computed: {
    variantClass() {
      return this.variant ? `form-button--${this.variant}` : '';
    },
  },
  methods: {
    handleClick() {
      this.defineEmit('click');
    },
  },
};
</script>

<style lang="scss">

.form-button {
  border: none;
  border-radius: 1rem;
  padding: 1.2rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  width: 12rem;
  height: 1rem;

  @include sm {
    width: 8rem;
    height: 2rem;
  }

  @include md {
    width: 10rem;
    height: 2.5rem;
  }

  @include lg {
    width: 15rem;
    height: 3rem;
  }

  @include xl {
    width: 16rem;
    height: 3.5rem;
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
