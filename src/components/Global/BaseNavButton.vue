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
      default: 'auto',
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
      // Ensure dynamic font size is based on button dimensions
      const widthValue = parseFloat(this.width) || 0
      const heightValue = parseFloat(this.height) || 0

      // Calculate font size as a fraction of width and height
      const fontSize = (widthValue + heightValue) / 10

      return {
        width: this.width,
        height: this.height,
        fontSize: `${fontSize}px`,
      }
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
  padding: 13px 54px;
  border-radius: 35px;
  cursor: pointer;
  text-wrap-mode: nowrap;
}

/* Variants */
.nav-button--red-full {
  background-color: $red;
  color: white;
  font-weight: bolder;
  border: 4px solid $red;
}

.nav-button--green-full {
  background-color: $green;
  color: white;
  font-weight: bolder;
  border: 4px solid $green;
}

.nav-button--red-outline {
  background-color: white;
  color: $red;
  font-weight: bolder;
  border: 4px solid $red;
}

.nav-button--green-outline {
  background-color: white;
  color: $green;
  font-weight: bolder;
  border: 4px solid $green;
}

.nav-button--empty {
  background-color: transparent;
  color: #1e1e1e;
  border: none;
  font-weight: bolder;
}
</style>
