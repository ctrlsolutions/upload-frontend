<template>
  <div class="button-container">
    <button class="action-button action-button--danger">PLACEHOLDER</button>
    <button class="action-button action-button--success">PLACEHOLDER</button>
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
      return this.variant ? `action-button--${this.variant}` : '';
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

.action-button {
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

.action-button--danger {
  background-color: $red;
}

.action-button--success {
  background-color: $green;
  margin-top: 0.8rem;
}

.action-button:hover {
  opacity: 0.9;
}

.action-button:focus {
  outline: 0.125rem solid #fff;
  outline-offset: 0.125rem;
}

@media (max-width: $screen-md-min) {
  .action-button {
    width: 100%;
  }
}
</style>
