<template>
      <input type="text"  :class="['input-box',variantClass]" :style="textStyle">
      <slot></slot>
  </template>
  
  <script>
  export default {
    text: String,
    borderColor: String, // Expecting valid CSS color codes
    textColor: String,    // Expecting valid CSS color codes
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
        border: 3px $red;
        border-radius: 10px;
        border-style: solid;
        outline: none;
        font-weight: bold;
        color: $red;
        padding: 16px;
    }
    

    &--green {
        border: 2px $green;
        border-radius: 8px;
        padding: 16px;
    }
  }
  
  </style>
  