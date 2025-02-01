<template>
    <div class="form-checkbox" :class="variantClass">
        <input
            type="checkbox"
            :id="id"
            v-model="computedValue"
        />
        <label :for="id">
            <slot>{{ label }}</slot>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        modelValue:{
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: 'square',
        },
    },
    computed: {
        computedValue:{
            get(){
                return this.modelValue;
            },
            set(value){
                this.$emit("update:modelValue",value);
            },
        },
        variantClass() {
            return `form-checkbox--${this.variant}`;
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.form-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: flex-start;
    gap:0.5rem;

    input[type='checkbox'] {
        flex-shrink: 0;
        appearance: none;
        width: 1rem;
        height: 1rem;
        border: 0.125rem solid $red;
        border-radius: 0.25rem; 
        position: relative;
        transition: all 0.3s ease;
        vertical-align: top;
        margin-top: 2.2rem; 
    }

    input[type='checkbox']:checked {
        background-color: $red;
    }

    input[type='checkbox']:checked::after {
        content: '';
        position: absolute;
        top: 44%;
        left: 50%;
        width: 0.25rem;
        height: 0.5rem;
        border: solid white;
        border-width: 0 0.125rem 0.125rem 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    label {
        margin-top: 2rem;
        font-weight: bold;
        color: #9e2323;
        line-height: 1.5; 
    }
}
</style>
