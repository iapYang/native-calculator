<template>
    <div
        :class="{ 'button': true, 'large': isLarge}"
        @click="clickHandler"
    >
        <span>{{ button.value }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cbValue: '',
            cbOperation: '',
            cbFormerValue: '',
        };
    },
    props: ['button', 'value', 'type', 'operation', 'formerValue'],
    computed: {
        isLarge() {
            return this.button.size === 'large';
        },
    },
    methods: {
        clickHandler() {
            if (this.button.type === 'number') {
                if (this.value === '0' || this.type !== 'number') {
                    this.cbValue = this.button.value;
                } else {
                    this.cbValue = `${this.value}${this.button.value}`;
                }
            } else if (this.button.type === 'operation') {
                console.log(this.formerValue);
                if (this.type === 'operation') {
                    console.log('in 1');
                    this.cbValue = this.value;
                } else if (this.formerValue === '') {
                    console.log('in 2');
                    this.cbValue = this.value;
                    this.cbFormerValue = this.value;
                } else {
                    console.log('in 3');
                    const fv = parseFloat(this.formerValue);
                    const cv = parseFloat(this.value);
                    console.log(this.operation, fv, cv);
                    this[this.operation](fv, cv);
                    console.log('result', this.cbValue);
                    this.cbFormerValue = this.cbValue;
                }
                this.cbOperation = this.button.function;
            } else if (this.button.type === 'equal') {
                console.log('this is equal');
                const fv = parseFloat(this.formerValue);
                const cv = parseFloat(this.value);
                console.log(this.operation, fv, cv);
                this[this.operation](fv, cv);
                console.log('result', this.cbValue);
                this.cbFormerValue = '';
            } else {
                this[this.button.function]();
            }
            this.$emit('buttonClick', {
                value: this.cbValue,
                type: this.button.type,
                operation: this.cbOperation,
                formerValue: this.cbFormerValue,
            });
            this.cbValue = '';
        },
        clear() {
            this.cbValue = '0';
        },
        plusMinus() {
            if (this.value.includes('-')) {
                this.cbValue = this.value.slice(1);
            } else {
                this.cbValue = `-${this.value}`;
            }
        },
        percentage() {
            this.cbValue = `${Number(this.value) / 100}`;
        },
        point() {
            this.cbValue = `${this.value}.`;
        },
        divide(former, current) {
            this.cbValue = former / current;
        },
        product(former, current) {
            this.cbValue = former * current;
            console.log(this.cbValue);
        },
        minus(former, current) {
            this.cbValue = former - current;
        },
        plus(former, current) {
            this.cbValue = former + current;
        },
        equle(former, current) {
        },
    },
};
</script>

<style lang="scss" scoped>
    .button {
        position: relative;
        display: inline-block;
        width: 25%;
        height: 80px;
        background-color: rgb(204, 204, 205);
        text-align: center;
        cursor: pointer;
        span {
            font-size: 30px;
            line-height: 80px;
        }
        &.large {
            width: 50%;
        }
    }
</style>


