<template>
    <div id="tab_bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
    #tab_bar{
        display: flex;
        flex-flow: row;
        background: #f6f6f6;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        box-shadow: 0px -1px 3px rgba(100, 100, 100, .15);
    }
</style>