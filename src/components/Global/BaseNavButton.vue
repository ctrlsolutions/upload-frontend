<template>
  <button
    :class="['nav-button', variantClass]"
    @click="navigate"
    :style="buttonStyle"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'empty',
    },
    width: {
      type: String,
      default: 'null',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    variantClass() {
      return `nav-button--${this.variant}`
    },
    buttonStyle() {
      const styles = {
        height: this.height,
      }

      if (this.width) {
        styles.width = this.width
      }

      return styles
    },
  },
  methods: {
    navigate() {
      this.$router.push(this.route)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-button {
  font-family: 'Inter', serif;
  display: flex;
  border-radius: 35px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 800;
  justify-content: center;
  @include sm {
    width: 5rem;
    padding: 0.2rem 1.3rem;
    font-size: 0.8em;
  }
  @include md {
    width: 7rem;
    padding: 0.3rem 1.5rem;
    font-size: 1em;
  }
  @include lg {
    width: 9rem;
    padding: 0.15rem 2rem;
    font-size: 1.3em;
  }
}

.nav-button--red-full {
  background-color: $red;
  color: white;
  border: 0.2rem solid $red;
}

.nav-button--green-full {
  background-color: $green;
  color: white;
  border: 0.2rem solid $green;
}

.nav-button--red-outline {
  background-color: white;
  color: $red;
  border: 0.2rem solid $red;
}

.nav-button--green-outline {
  background-color: white;
  color: $green;
  border: 0.2rem solid $green;
}

.nav-button--empty {
  background-color: transparent;
  color: #1e1e1e;
  border: none;
}
</style>
