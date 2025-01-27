<template>
    <div class="form-checkbox" :class="variantClass">
        <input
            type="checkbox"
            :id="id"
            :checked="checked"
            @change="$emit('update:checked', $event.target.checked)"
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
        checked: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: 'circle', // Default to circular variant
        },
    },
    computed: {
        variantClass() {
            return `form-checkbox--${this.variant}`;
        },
    },
};
</script>

<style lang="scss" scoped>
/* Apply box-sizing globally for consistent sizing */
* {
    box-sizing: border-box;
}

.form-checkbox {
    display: flex;
    align-items: center;
    // flex-wrap: nowrap; /* Prevent wrapping */
    // gap: 0.5rem; /* Add consistent spacing */
    cursor: pointer;

    &--circle {
        input[type='checkbox'] {
            flex-shrink: 0;
            appearance: none;
            width: 1rem; /* Scales well with zoom */
            height: 1rem;
            cursor: pointer;
            border: 0.125rem solid #9e2323;
            border-radius: 50%; /* Circular shape */
            position: relative;
            transition: all 0.3s ease;
        }

        input[type='checkbox']:checked::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.5rem;
            height: 0.5rem;
            background-color: #c07a7a;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        label {
            margin-top: 2rem;
            margin-left: 0.5rem;
            font-weight: bold;
            color: #9e2323;
        }
    }

    &--square {
        display: flex;
        align-items: flex-start;
        gap:0.5rem;

        input[type='checkbox'] {
            flex-shrink: 0;
            appearance: none;
            width: 1rem;
            height: 1rem;
            border: 0.125rem solid #9e2323;
            border-radius: 0.25rem; /* Slightly rounded corners */
            position: relative;
            transition: all 0.3s ease;
            vertical-align: top; /* Align to the top of the text */
            margin-top: 2.2rem; /* Adjust the vertical alignment */
        }

        input[type='checkbox']:checked {
            background-color: #9e2323;
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
            // margin-left: 0.5rem;
            font-weight: bold;
            color: #9e2323;
            line-height: 1.5; /* Adjust line height for better spacing */
        }
    }
}
</style>
