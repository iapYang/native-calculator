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
            cbType: 'number',
        };
    },
    props: ['button', 'value', 'type'],
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
                console.log('dsihfii');
            } else {
                this[this.button.function]();
            }
            this.$emit('buttonClick', {
                value: this.cbValue,
                type: this.cbType,
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
            this.cbType = 'button';
        },
        percentage() {
            this.cbValue = `${Number(this.value) / 100}`;
            this.cbType = 'button';
        },
        point() {
            this.cbValue = `${this.value}.`;
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


