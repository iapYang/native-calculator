<template lang="html">
    <div class="app-container">
        <div class="calculator">
            <div class="screen">
                <input
                    placeholder=0
                    v-model="showValue"
                />
            </div>
            <action-button
                v-for="button,index in buttons"
                :button="button"
                :key="index"
                :value="showValue"
                :type="currentType"
                @buttonClick="buttonClickHandler"
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
            showValue: '0',
            currentType: 'number',
        };
    },
    computed: {
        
    },
    methods: {
        inputChangeHandler() {
            console.log('2333333333333333333333333333');
        },
        buttonClickHandler(data) {
            if (!data.value) return;
            console.log(data.value);
            this.showValue = data.value;
            this.currentType = data.type;
        },
    },
    components: {
        ActionButton,
    },
};
</script>

<style lang="scss">
@import '../style/reset';
html,
body {
    width: 100%;
    height: 100%;
}

#app,
.app-container {
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
}

.screen {
    position: relative;
    width: 100%;
    height: 160px;
    background-color: #000;
    text-align: right;
    input {
        position: absolute;
        display: block;
        width: 100%;
        text-align: right;
        outline: medium;
        background-color: #000;
        border-width: 0px;
        bottom: 0;
        right: 0;
        color: #fff;
        font-size: 40px;
        padding: 10px 0;

        &::-webkit-input-placeholder {
            color: #fff;
        }
    }
}
</style>
