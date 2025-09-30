<script>
export default {
    name: 'ModalRegistration',
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        handleOverlayClick() {
            this.close();
        }
    }
}
</script>
<template>

    <div v-if="visible" class="modal-overlay" @click.self="handleOverlayClick">
        <div class="modal-content">
            <button @click="close" class="modal-close">✕</button>

            <h1 class="modal-tile">Регистрация</h1>

            <div class="modal-input">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="your@email.ru">
            </div>
            <div class="modal-input">
                <label for="password">Пароль</label>
                <input id="password" type="password" min="8" placeholder="">
            </div>
            <div class="modal-input">
                <label for="FIO">ФИО</label>
                <input id="passFIOword" type="text"  placeholder="Иванов Иван Иванович">
            </div>
            <div class="modal-input">
                <label for="Company">Компания</label>
                <input id="Company" type="text"  placeholder="Наименование">
            </div>


            <button class="modal-enter">Войти</button>
        </div>
    </div>

</template>


<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

}

.modal-content {
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: 10px;
    min-width: 460px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

}


.modal-close {
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
    height: 70px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
}

.modal-tile {
    color: var(--color-blue);
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 1em;

}

.modal-input {
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: #fff;
    color: #c9c9c9;
}



label {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    color: black;

    margin: .5em 0;
}

input {
    width: 100%;
    border: 1px solid #c9c9c9;
    height: 45px;
    border-radius: 10px;
    padding: .6em;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    margin: .5em 0;
}

input::placeholder {
    color: #c9c9c9;
}

input:focus {
    border: .15em solid #000;
    outline: 0;
}

.modal-enter {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin: .5em 0;
    cursor: pointer;
    transition: all ease-in .1s;
    font-weight: 600;
    font-size: 16px;
}

.modal-enter {
    background-color: rgb(37 99 235);
}

.modal-enter:hover {
    background-color: rgb(73, 122, 228);
}
</style>
