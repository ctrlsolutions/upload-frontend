<template>
      <input type="text" placeholder="Placeholder" :class="['input-box',variantClass]" :style="textStyle">
      <slot></slot>
  </template>
  
  <script>
  export default {
    text: String,
    props: {
      id: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: '',
      },
      variant: {
        type: String,
        default: 'red', // Default to circular variant
      },
    },
    computed: {
      variantClass() {
        return `input-box--${this.variant}`
      },
      textStyle() {
        const styles = {
            height: this.height,
        }

        if (this.width) {
            styles.width = this.width
        }

        styles.placeholder = this.placeholder

        return styles
        },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .input-box {
    width: 100%;
    padding: 16px;
    border: 2px solid;
    border-radius: 12px;
    font-family: "Inter", serif;
  
    &--red {
        border: 0.2em $red;
        border-radius: 1.2em;
        border-style: solid;
        outline: none;
        font-weight: bold;
        font-size: medium;
        color: $red;
        padding: 1.25em;
    }
    

    &--green {
        border: 0.25em $green;
        border-radius: 1.25em;
        border-style: solid;
        outline: none;
        font-weight: bold;
        color: $red;
        padding: 1.5em;
    }
  }

  ::placeholder {
    color: $red;
    opacity: 0.7;
  }
  
  </style>
  