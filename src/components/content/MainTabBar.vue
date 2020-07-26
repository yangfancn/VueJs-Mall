<template>
  <tab-bar>
    <tab-bar-item path="/home" acticeColor="#1296db">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.png" alt="">
      </template>
      <template v-slot:item-active-icon>
        <img src="~assets/img/tabbar/home-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <span>首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" acticeColor="#1296db">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/type.png" alt="">
      </template>
      <template v-slot:item-active-icon>
        <img src="~assets/img/tabbar/type-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" acticeColor="#1296db">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/cart.png" alt="">
      </template>
      <template v-slot:item-active-icon>
        <img src="~assets/img/tabbar/cart-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" acticeColor="#1296db">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/mine.png" alt="">
      </template>
      <template v-slot:item-active-icon>
        <img src="~assets/img/tabbar/mine-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
