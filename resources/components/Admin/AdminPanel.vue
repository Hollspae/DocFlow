<script>
import BaseButton from '../Button/BaseButton.vue';
import Navigation from '../UserPanel/Navigation.vue';
export default {
    name: 'AdminPanel',
    data() {
        return {
            isLoading: false,
            activeButton: 'admin-panel'
        }
    },
    components: {
        BaseButton, Navigation
    },
    methods: {
        setActiveButton(buttonName) {
            this.activeButton = buttonName;
        },


    }
}
</script>
<template>

    <Navigation />

    <div class="panel-content" style="width: 100%;text-align: center; ">
        <h1 style="color: black;">Admin Panel</h1>

    </div>

</template>


<style>
body {
    background: var(--color-gray-light);
    width: 100vw;
    height: 100vh;

}
</style>
