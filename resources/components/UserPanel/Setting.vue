<script>
import BaseButton from '../Button/BaseButton.vue';
import UserNavigation from './UserNavigation.vue';
export default {
    name: 'Setting',
    data() {
        return {
            isLoading: false,
            activeButton: 'incoming'
        }
    },
    components: {
        BaseButton, UserNavigation
    },
    methods: {
        setActiveButton(buttonName) {
            this.activeButton = buttonName;
        },


    }
}
</script>
<template>

    <UserNavigation />

    <div class="panel-content" style="width: 100%;text-align: center; ">
        <h1 style="color: black;">Setting</h1>

    </div>

</template>


<style>
body {
    background: var(--color-gray-light);
    width: 100vw;
    height: 100vh;

}
</style>
