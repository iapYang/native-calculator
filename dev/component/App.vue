<template lang="html">
    <div class="app-container">
        <div class="calculator">
            <div class="screen"></div>
        </div>
    </div>
</template>

<script>

export default {};
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
</style>
