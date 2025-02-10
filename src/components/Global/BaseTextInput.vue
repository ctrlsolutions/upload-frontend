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
    default: 'auto',
  },
  height: {
    type:String,
    default: 'auto',
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

    &::placeholder {
      color: #999;
      opacity: 0.7;
    }

    &--red {
      border: 0.2rem $red;
      border-radius: 1.2rem;
      border-style: solid;
      padding: 1.25rem;
      outline: none;
      font-weight: bold;
      font-size: medium;
      color: $red;

      &::placeholder {
        color: $red;
      }
    }

    &--green {
      border: 0.15rem $green;
      border-radius: 1.25rem;
      padding: 1.25rem;
      border-style: solid;
      outline: none;
      font-weight: bold;
      font-size: medium;
      color: $green;

      &::placeholder {
        color: $green;
      }
    }
  }

</style>
