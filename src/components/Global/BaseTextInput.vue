<template>
      <input 
      :type="type" 
      :class="['input-box',variantClass]" 
      :style="textStyle" 
      :placeholder="placeholder">
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
        default: 'red', // Default to circular variant
      },
    },
    computed: {
      variantClass() {
        return `input-box--${this.variant}`
      },
      textStyle() {
        return {
            '--placeholder-color': this.getVariantColor(this.variant),
        };
      },
    },
    methods: {
        getVariantColor(variant) {
            const colors = {
                red: '$red',
                green: '$green'
            };
            return colors[variant] || '#000000';
        }
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
        color: $green;
        padding: 1.5em;
    }
    &::placeholder {
      color: var(--placeholder-color);
      opacity: 0.7;
    }
  }


  </style>
  