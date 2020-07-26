<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <p class="home-nav-title">首页</p>
      </template>
    </nav-bar>
    <div class="home-swiper">
      <template>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item in banners" :key="item.acm">
            <img :src="item.image" :alt="item.title">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </template>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"
import {getHomeMultidata} from "network/home"
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          dealy: 3000
        }
      },
      banners: [],
      dKeyword: null,
      keywords: null,
      recommend: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  created(){
    getHomeMultidata().then(result => {
      this.banners = result.data.banner.list
      this.dKeyword = result.data.dKeyword
      this.keywords = result.data.keywords
      this.recommend = result.data.recommend
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff
  }
  .home-nav-title {
    font-weight: 600;
    text-align: center;
  }
  .home-swiper {
    width: 100%;
    overflow: hidden;
  }
  .home-swiper img{
    width: 100%;
  }
</style>
