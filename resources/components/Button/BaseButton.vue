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
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'secondary', 'danger', 'navigation', 'navigation-active'].includes(value);
            }
        },
    },
    computed: {
        computedClass() {
            return [
                'btn',
                `btn--${this.variant}`,
                { 'btn--disabled': this.disabled },
            ]
        }
    },
    methods: {
        onClick(event) {
            if (this.disabled) return;
            this.$emit('click', event);
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
    width: 100%;
    text-align: center;
}


/* PRIMARY */
.btn--primary {
    background: var(--color-blue);
    color: var(--color-white);
}

.btn--primary:hover {
    background-color: rgb(73, 122, 228);
}


/* SECONDARY */
.btn--secondary {
    background: var(--color-white);
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
}

.btn--secondary:hover {
    background-color: var(--color-blue);
    color: rgb(255, 255, 255);
}


/* DANGER */
.btn--danger {
    background: #e53935;
    color: var(--color-white);
}

.btn--danger:hover {
    background: #c95957;

}

/* NAVIGATION ACTIVE */
.btn--navigation-active {
    background: var(--color-blue);
    color: var(--color-white);
    font-weight: bold;
    letter-spacing: .5px;
    box-shadow: var(--box-shadow);
    text-align: left;
}

/* УБРАТЬ ПРОБЕЛ! */
.btn--navigation-active:hover {
    background-color: rgb(73, 122, 228);
}

/* NAVIGATION */
.btn--navigation {
    background: var(--color-white);
    border: none;
    color: var(--color-black);
    text-align: left;
    font-weight: bold;
    letter-spacing: .5px;
}

.btn--navigation:hover {
    background: var(--color-gray-light);

}


/* ICON */
.btn i {
    margin-right: 8px;
    font-size: 16px;
    vertical-align: middle;
}



/* DISABLED */
.btn--disabled,
.btn:disabled {
    background: #e0e0e0 !important;
    color: #bdbdbd !important;
    cursor: not-allowed;
}
</style>
