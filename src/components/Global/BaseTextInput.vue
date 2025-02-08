<template>
      <input 
      :id="id"
      :type="type" 
      :class="['input-box',variantClass]" 
      :style="{ '--input-width': width, '--input-height': height}" 
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
        default: '100%',
      },
      height: {
        type:String,
        default: '100%',
      },
    },
    computed: {
      variantClass() {
        return `input-box--${this.variant}`
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .input-box {
    width: var(--input-width);
    height: var(--input-height);
    padding: 16px;
    border: 2px solid;
    border-radius: 12px;
    font-family: "Inter", serif;
  
    &::placeholder {
    color: #999;
    opacity: 0.7;
  }

  &--red {
    border: 0.2em $red;
    border-radius: 1.2em;
    border-style: solid;
    outline: none;
    font-weight: bold;
    font-size: medium;
    color: $red;
    padding: 1.25em;

    &::placeholder {
      color: $red;
    }
  }

  &--green {
    border: 0.2em $green;
    border-radius: 1.25em;
    border-style: solid;
    outline: none;
    font-weight: bold;
    font-size: medium;
    color: $green;
    padding: 1.25em;

    &::placeholder {
      color: $green;
    }
  }
  }
  
  </style>
  