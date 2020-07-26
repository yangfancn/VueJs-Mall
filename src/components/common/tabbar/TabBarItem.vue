<template>
    <div class="tar-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active-icon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TarBarItem',
    data(){
        return {
            // isActive:true
        }
    },
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#1296db'
        }
    },
    computed: {
        isActive(){
            return this.$route.path === this.path
            // return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {color: '#777'}
        }
    },
    methods: {
        itemClick(){
            if(this.$route.path === this.path)
                return false
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
    .tar-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 12px;
    }

    .tar-bar-item img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 5px;
    }

    .tar-bar-item span {
        display: block;
        margin-top: 3px;
    }

</style>
