<template>
  <input 
  :id="id"
  :type="type" 
  :class="['input-box',variantClass]" 
  :style="{ width: width, height: height}" 
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
    const widthValue = parseFloat(this.width) || 0
    const heightValue = parseFloat(this.heigh) || 0

    const fontSize = (widthValue + heightValue) / 10

    const paddingTopBottom = heightValue / 5
    const paddingLeftRight = widthValue / 10

    return {
      width: this.width,
      height: this.height,
      fontSize: `${fontSize}px`,
      padding: `${paddingTopBottom}px ${paddingLeftRight}px`, 
    }
  }
},
}
</script>

<style lang="scss" scoped>
  .input-box {
    font-family: "Inter", serif;

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
