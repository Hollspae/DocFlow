<script>
import ModalAuth from './Modal/ModalAuth.vue';
import ModalRegistration from './Modal/ModalRegistration.vue'
import BaseButton from './Button/BaseButton.vue';


export default {
    components: { ModalRegistration, BaseButton, ModalAuth },
    data() {
        return {
            isModalVisible: false,
            isModalRegVisible: false
        }
    }

}
</script>
<template>
    <div class="container">
        <div class="Block-one">
            <img class="logo" src="../image/Logo--circle-orange.svg" alt="">

            <h1>DocFlow </h1>
            <p>Современная система электронного документооборота для вашего бизнеса</p>
            <ul>
                <li>Безопасное хранение документов</li>
                <li>Автоматизация бизнес-процессов</li>
                <li>Контроль исполнения задач</li>
            </ul>

        </div>
        <div class="Block-two">
            <p style="color: rgb(37 99 235);font-size: 24px; font-weight: 500;padding-bottom: 0px;">Добро пожаловать
            </p>
            <p style="color: rgb(99 102 106);font-size: 14px;">Войдите в систему или создайте новый аккаунт</p>
            <div class="form">

                <BaseButton variant="primary" :disabled="isLoading" @click="isModalVisible = true">
                    <i class="fas fa-user"></i>
                    Войти в систему
                </BaseButton>



                <BaseButton variant="secondary" :disabled="isLoading" @click="isModalRegVisible = true">
                    <i class="fas fa-user"></i>
                    Зарегистрироваться
                </BaseButton>

            </div>

            <p style="color: rgb(99 102 106); font-size: 13px;">Продолжая, вы соглашаетесь с <a href="">условиями
                    использования</a></p>
        </div>

        <ModalAuth :visible="isModalVisible" @close="isModalVisible = false" />

        <ModalRegistration :visible="isModalRegVisible" @close="isModalRegVisible = false" />
    </div>

</template>



<style scoped>
.container {
    margin: auto;
    display: inline-flex;
    box-shadow: var(--box-shadow);

}

.Block-one,
.Block-two {
    height: 420px;
    width: 450px;
    text-align: center;
}

.Block-one {
    background-color: var(--color-blue);
    padding: 3em;
}

.Block-two {
    background-color: var(--color-white);
    padding: 3em;

}

.logo {
    width: 70px;
    height: 70px;
    margin: auto;
}

h1 {
    margin-top: .5em;
    font-size: 35px;
    font-weight: bold;
}

p {
    padding: 1em 0;
    font-size: 17px;

}

ul li:before {
    content: '\2713';
    display: inline-block;
    color: #F59E0B;
    padding: 0 6px 0 0;
}

ul li {
    text-align: left;
    list-style-type: none;
    font-size: 15px;
    padding-top: .6em;
}

.form {
    padding: 0px;
    display: flex;
    flex-direction: column;
}

.form>button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin: .5em 0;
    cursor: pointer;
    transition: all ease-in .1s;
    font-weight: 600;
    font-size: 16px;
}

#login {
    background-color: var(--color-blue);
}

#login:hover {
    background-color: rgb(73, 122, 228);
}

#logout {
    border: 2px solid var(--color-blue);
    color: rgb(37 99 235);
}

#logout:hover {
    background-color: var(--color-blue);
    color: var(--color-white);
}

a {
    color: var(--color-blue);
    font-size: 13px;
    text-decoration: none;

}

a:hover {
    text-decoration: underline;

}
</style>
