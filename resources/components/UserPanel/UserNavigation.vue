<script>
import BaseButton from '../Button/BaseButton.vue';
export default {
    name: 'UserNavigation',
    data() {
        return {
            isLoading: false,
            activeButton: 'main'
        }
    },
    components: {
        BaseButton
    },
    methods: {
        setActiveButton(buttonName) {
            this.activeButton = buttonName;
        },


    }
}
</script>


<!-- НАСТРОИТЬ МЕНЮ НА АКТИВНУЮ СТРАНИЦУ -->


<template>
    <aside>
        <div class="panel-nav">

            <div class="nav-logo">
                <div class="bg-logo">
                    <img src="../../image/Logo-white.svg" alt=""></img>
                </div>
                <div class="container-logo">
                    <span class="logo-title">DocFLow</span>
                    <span class="logo-disc">Панель управления</span>
                </div>
            </div>

            <div class="nav-content">
                <router-link to="/user-panel" style="color:black">
                    <BaseButton :variant="activeButton === 'main' ? 'navigation-active' : 'navigation'"
                        @click="setActiveButton('main')" class="changed-button">
                        <i class=""></i>
                        Главная
                    </BaseButton>
                </router-link>

                <router-link to="/user-panel/incoming" style="color:black">
                    <BaseButton :variant="activeButton === 'incoming' ? 'navigation-active' : 'navigation'"
                        @click="setActiveButton('incoming')" class="changed-button">
                        <i class=""></i>
                        Входящие
                    </BaseButton>
                </router-link>

                <router-link to="/user-panel/outgoing" style="color:black">
                    <BaseButton :variant="activeButton === 'outgoing' ? 'navigation-active' : 'navigation'"
                        @click="setActiveButton('outgoing')" class="changed-button">
                        <i class=""></i>
                        Исходящие
                    </BaseButton>
                </router-link>

                <router-link to="/user-panel/settings" style="color:black">
                    <BaseButton :variant="activeButton === 'settings' ? 'navigation-active' : 'navigation'"
                        @click="setActiveButton('settings')" class="changed-button">
                        <i class=""></i>
                        Настройки
                    </BaseButton>
                </router-link>

            </div>

            <!-- <router-link to="/admin-panel" style="color:black"> -->
                <BaseButton :variant="activeButton === 'admin-panel' ? 'navigation-active' : 'navigation'"
                    @click="setActiveButton('admin-panel')" class="changed-button">
                    <i class=""></i>
                    Админ панель
                </BaseButton>
            <!-- </router-link> -->

        </div>

    </aside>
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
    margin-bottom: 10px;
    border-bottom: 2px solid var(--color-gray);
}

span {
    color: black;
}
</style>
