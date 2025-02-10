<template>
  <input 
  :id="id"
  :type="type" 
  :class="['input-box',variantClass]" 
  :style="boxStyle" 
  :placeholder="placeholder"
  v-bind="$attrs"
  />
</template>

<script>
export default {
text: String,
props: {
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  variant: {
    type: String,
    default: 'red',
  },
  width: {
    type: String,
    default: 'null',
  },
  height: {
    type:String,
    default: 'null',
  },
},
computed: {
  variantClass() {
    return `input-box--${this.variant}`
  },
  boxStyle() {
    const styles = {
      height: this.height,
    }
    if(this.width) {
      styles.width = this.width
    }

    return styles
  }
},
}
</script>

<style lang="scss" scoped>
  .input-box {
    font-family: "Inter", serif;
    height: fit-content;
    border-radius: 0.8rem;
    @include sm {
      width: 15rem;
      padding: 0.5rem 0.6rem;
      font-size: 1em;
    }
    @include md {
      width: 18rem;
      padding: 0.5rem 0.8rem;
      font-size: 1em;
    }
    @include lg {
      width: 20rem;
      padding: 0.5rem 1rem;
      font-size: 1.3em;
    }

    &::placeholder {
      color: #999;
      opacity: 0.7;
    }

    &--red {
      border: 0.15rem $red;
      border-style: solid;
      outline: none;
      font-weight: bold;
      color: $red;

      &::placeholder {
        color: $red;
      }
    }

    &--green {
      border: 0.15rem $green;
      border-style: solid;
      outline: none;
      font-weight: bold;
      color: $green;

      &::placeholder {
        color: $green;
      }
    }
  }

</style>
