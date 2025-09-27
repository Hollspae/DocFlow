<template>
    <button :class="computedClass" :type="type" :disabled="disabled" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        type: {
            type: String,
            default: 'button' // button, submit, reset
        },
        disabled: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: 'primary' // primary, secondary, danger
        },

    },
    computed: {
        computedClass() {
            return [
                'btn',
                `btn--${this.variant}`,
                { 'btn--disabled': this.disabled },
            ]
        },

        methods: {
            onClick(event) {
                if (this.disabled) return;
                this.$emit('click', event);
            }
        }
    }
}
</script>

<style>
.btn {
    font-size: 15px;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn--primary {
    background: rgb(37 99 235);
    color: #fff;
}

.btn--secondary {
    background: #fff;
    border: 2px solid rgb(37 99 235);
    color: rgb(37 99 235);
}

.btn--danger {
    background: #e53935;
    color: #fff;
}

.btn--disabled,
.btn:disabled {
    background: #e0e0e0 !important;
    color: #bdbdbd !important;
    cursor: not-allowed;
}

.btn--primary:hover {
    background-color: rgb(73, 122, 228);
}

.btn--secondary:hover {
    background-color: rgb(37 99 235);
    color: rgb(255, 255, 255);
}

.btn i {
    margin-right: 8px;
    font-size: 16px;
    vertical-align: middle;
}
</style>
