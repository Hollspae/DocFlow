<script>


export default {
    data() {

    },

};
</script>
<template>
    <div class="container">
        <div class="Block-one">
            <img class="logo" src="../image/Logo.svg" alt="">
            <h1>DocFlow </h1>
            <p>Современная система электронного документооборота для вашего бизнеса</p>
            <ul>
                <li>Безопасное хранение документов</li>
                <li>Автоматизация бизнес-процессов</li>
                <li>Контроль исполнения задач</li>
            </ul>

        </div>
        <div class="Block-two">
            <p style="color: rgb(37 99 235);font-size: 30px; font-weight: 500;padding-bottom: 0px;">Добро пожаловать
            </p>
            <p style="color: rgb(75 85 99);font-size: 15px; ">Войдите в систему или создайте новый аккаунт</p>
            <form action="" style="display: flex; flex-direction: column;">
                <button id="login">Войти в систему</button>
                <button id="logout">Создать аккаунт</button>
            </form>
            <p style="color: rgb(75 85 99); font-size: 13px;">Продолжая, вы соглашаетесь с <a href=""
                    style="color: rgb(37 99 235); font-size: 13px;">условиями использования</a></p>
        </div>
    </div>
</template>



<style scoped>
.container {
    margin: auto;
    display: inline-flex;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

}

.Block-one,
.Block-two {
    height: 420px;
    width: 450px;

    text-align: center;
}

.Block-one {
    background-color: rgb(37 99 235);
    padding: 3em;
}

.Block-two {
    background-color: rgb(255, 255, 255);
    padding: 3em;

}

.logo {
    width: 70px;
    height: 70px;
    margin: auto;
}

h1 {

    font-size: 30px;
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
    padding-top: .5em;
}

form {
    padding: 0px;
}

form>button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 1em;
    cursor: pointer;
    transition: all ease-in .1s;
}

#login {
    background-color: rgb(37 99 235);
    font-size: 16px;
    font-weight: 800;

}

#login:hover {
    background-color: rgb(73, 122, 228);
}

#logout {
    border: 2px solid rgb(37 99 235);
    color: rgb(37 99 235);
    font-size: 16px;
    font-weight: 800;
}

#logout:hover {
    background-color: rgb(37 99 235);
    color: rgb(255, 255, 255);
}
</style>
