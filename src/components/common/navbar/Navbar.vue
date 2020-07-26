<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {

  },
  computed: {

  }
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    flex-flow: row;
    line-height: 44px;
    overflow: hidden;
    box-shadow: 0 1px 4px 1px rgba(100,100,100,.15);
  }

  .left, .right {
    width: 60px;
    text-align: center;
  }

  .center{
    flex: 1;
  }

</style>
