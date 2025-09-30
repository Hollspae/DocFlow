<script>
import BaseButton from './Button/BaseButton.vue';
export default {
    name: 'UserPanel',
    components: {
        BaseButton
    },
    mounted() {
        console.log('UserPanel mounted') // Проверяем загрузку компонента

    },


}
</script>


<template>

    <aside>
        <div class="panel-nav">

            <div class="nav-logo">
                <div class="bg-logo">
                    <img src="../image/Logo-white.svg" alt=""></img>
                </div>
                <div class="container-logo">
                    <span class="logo-title">DocFLow</span>
                    <span class="logo-disc">Панель управления</span>
                </div>
            </div>

            <div class="nav-content">

                <BaseButton variant="navigation-active" :disabled="isLoading" class="changed-button" @click="">
                    <i class="fas fa-user"></i>
                    Главная
                </BaseButton>

                <div class="nav-button">

                    <BaseButton variant="navigation" :disabled="isLoading" class="changed-button">
                        <i class="fas fa-user"></i>
                        Входящие
                    </BaseButton>

                    <!-- <div class="nav-button-hidden">

                        <button>
                            <img src="" alt=""></img>
                            <span>Регистрация</span>
                        </button>

                        <button>
                            <img src="" alt=""></img>
                            <span>Обработка</span>
                        </button>

                        <button>
                            <img src="" alt=""></img>
                            <span>Ознакомление</span>
                        </button>

                    </div> -->

                </div>

                <!--
                <button>
                    <img src="" alt=""></img>
                    <span>Исходящие</span>
                </button>
                <button>
                    <img src="" alt=""></img>
                    <span>Контрагенты</span>
                </button>
                <button>
                    <img src="" alt=""></img>
                    <span>Настройки</span>
                </button>
                <button>
                    <img src="" alt=""></img>
                    <span>Админ панель</span>
                </button> -->

            </div>
        </div>


    </aside>

    <div class="panel-content">
        asd

    </div>

</template>


<style>
aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    padding: 20px 0;
    z-index: 1000;
    background: var(--color-white)
}

.changed-button {
    width: 240px;
    height: 50px;
margin: 4px;

}

.panel-nav {
    display: grid;
    width: 100%;
    justify-content: center;
    flex-direction: column;

}

.nav-logo {
    display: flex;
    align-items: center;
    padding: 5px 50px 30px 0px;

}

.container-logo {
    display: grid;
    line-height: 18px;
    margin-left: 10px;
}

.logo-title {
    color: var(--color-blue);
    font-size: 16px;
    font-weight: bold;

}

.logo-disc {
    color: rgb(107 114 128);
    font-size: 12px;

}

.bg-logo {

    width: 35px;
    height: 35px;
    border-radius: 10px;
    background: var(--color-blue);
    align-content: center;

}

.bg-logo>img {
    margin: auto;
    width: 60%;
    height: 60%;

}

.nav-content {
    display: grid;
    align-content: left;
}

span {
    color: black;
}

.panel-content {
    background: var(--color-gray-light);
    width: 100vw;
    height: 100vh;
    z-index: 99;
}
</style>
