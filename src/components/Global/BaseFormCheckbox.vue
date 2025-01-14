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
            default: 'circle', // default is circle
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

.form-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    

    /* Variants */

    &--circle {
        input[type='checkbox'] {
            appearance: none;
            width: 14px;
            height: 14px;
            cursor: pointer;
            border: 2px solid #ccc; 
            background-color: transparent; 
            position: relative;
            transition: background-color 0.3s, border-color 0.3s;
            border-radius: 50%; /* Make it circular */
            border-color:rgb(158, 35, 35);
        }
    
        /* Checked state for circular checkbox */
        input[type='checkbox']:checked {
            background-color: transparent; 
            border-color: rgb(158, 35, 35); 
        }
    
        /* Add a smaller circle inside for checked state */
        input[type='checkbox']:checked::before {
            content: '';
            position: absolute;
            top: 50%; 
            left: 50%; 
            width: 8px; 
            height: 8px; 
            background-color: rgb(192, 122, 122);
            border-radius: 50%; /* Keep it circular */
            border-color: rgb(0, 30, 255);
            transform: translate(-50%, -50%);
        }
    
        label {
            cursor: pointer;
            margin-left: 8px;
            font-weight: bold;
            color: rgb(158, 35, 35);
        }
    }

    /* New variant for square checkbox */
    &--square {
        input[type='checkbox'] {
            appearance: none;
            margin-right: 8px;
            cursor: pointer;
            border-radius: 4px; /* No border-radius for square box */
            border: 2px solid rgb(158, 35, 35);
            width: 14px; /* Increase width */
            height: 15px; /* Increase height */
            // background-color: transparent; /* Make the background transparent when unchecked */
            position: relative;
        }

        input[type='checkbox']:checked {
            background-color:rgb(158, 35, 35);
            border-color: rgb(158, 35, 35); /* Red border when checked */
        }

        /* Create the checkmark */
        input[type='checkbox']:checked::after {
            content: '';
            position: absolute;
            top: 0px; /* Adjust top position */
            left: 3px; /* Adjust left position */
            width: 5px; /* Width of the checkmark */
            height: 10px; /* Height of the checkmark */
            border: solid white; /* White checkmark */
            border-width: 0 3px 3px 0; /* Create a checkmark shape */
            transform: rotate(45deg); /* Rotate to form a checkmark */
        }

        label {
            cursor: pointer;
            font-weight: bold;
            color: rgb(158, 35, 35);
        }
    }
}
</style>
