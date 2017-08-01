<template lang="html">
    <div class="app-container">
        <div class="calculator">
            <div class="screen"></div>
            <action-button
                v-for="button,index in buttons"
                :button="button"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import data from '../data/buttons.json';

import ActionButton from './layout/ActionButton.vue';

export default {
    data() {
        return {
            buttons: data.buttons,
        };
    },
    components: {
        ActionButton,
    }
};
</script>

<style lang="scss">
@import '../style/reset';
html,
body {
    width: 100%;
    height: 100%;
}
#app, .app-container {
    width: 100%;
    height: 100%;
}
.calculator {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 375px;
    height: 560px;
    background-color: #000;
}
.screen {
    width: 100%;
    height: 160px;
    background-color: red;
}
</style>
