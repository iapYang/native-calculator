<template lang="html">
    <div class="app-container">
        <div class="calculator">
            <div class="screen">
                <input
                    placeholder=0
                    v-model="showValue"
                    @keydown.prevent="keyupHandler"
                />
            </div>
            <action-button
                v-for="button,index in buttons"
                :button="button"
                :key="index"
                :value="showValue"
                :type="currentType"
                :operation="currentOperation"
                :formerValue="formerValue"
                @buttonClick="buttonClickHandler"
            />
        </div>
    </div>
</template>

<script>
import data from '../data/buttons.json';

import ActionButton from './layout/ActionButton.vue';

const buttons = data.buttons;

const keyValues = buttons.map(item => item.value);

export default {
    data() {
        return {
            buttons,
            showValue: '0',
            currentType: 'number',
            currentOperation: '',
            formerValue: '',
        };
    },
    computed: {
        
    },
    methods: {
        keyupHandler(e) {
            const currentKey = this.refrenceKey(e.key);
            if (keyValues.includes(currentKey)) {
                console.log('in');
                const index = keyValues.indexOf(currentKey);

                this.$children[index].clickHandler();
            }
        },
        refrenceKey(key) {
            if (key === '/') return '÷';
            if (key === '*') return '×';
            if (key === '+') return '＋';
            if (key === '-') return '－';
            
            return key;
        },
        buttonClickHandler(data) {
            if (data.type === 'operation') {
                this.currentOperation = data.operation;
                this.showValue = data.value;
            } else {
                if (!data.value) return;
                this.showValue = data.value;
            }
            this.currentType = data.type;
            this.formerValue = data.formerValue;
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
