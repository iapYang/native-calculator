<template>
    <div :class="{ 'button': true, 'large': isLarge}">
        <span>{{ button.value }}</span>
    </div>
</template>

<script>
export default {
    props: ['button'],
    computed: {
        isLarge() {
            return this.button.size === 'large';
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


