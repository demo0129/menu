<template>
  <div id="app">
    <home-header :seller="seller"></home-header>
    <div class="tab">
      <router-link
        to="/comm"
        class="tab-item"
      >
        <div @click="CommClick()">
          <span :class="{'active':shows == 1}">商品</span>
        </div>
      </router-link>
      <router-link
        to="/eval"
        class="tab-item"
      >
        <div @click="EvalClick()">
          <span :class="{'active':shows == 2}">评价</span>
        </div>
      </router-link>
      <router-link
        to="/busi"
        class="tab-item"
      >
        <div @click="BusiClick()">
          <span :class="{'active':shows == 3}">商家</span>
        </div>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shopcar></shopcar>
  </div>
</template>

<script>
import HomeHeader from './pages/header/Header'
import Shopcar from './pages/shopcar/Shopcar'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  computed: {
    shows: {
      get () {
        return this.$store.state.shows
      },
      set () {
      }
    }
  },
  components: {
    HomeHeader,
    Shopcar
  },
  methods: {
    getInfo () {
      this.$axios.get('/api/data.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      this.$store.commit('setLeftItems', res.data)
      this.seller = this.$store.state.leftItems.seller
    },
    CommClick () {
      this.$store.commit('commClick', 1)
    },
    EvalClick () {
      this.$store.commit('evalClick', 2)
    },
    BusiClick () {
      this.$store.commit('busiClick', 3)
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  #app
    z-index 0
    .tab
      display flex
      width 100%
      height .8rem
      line-height .8rem
      .tab-item
        color #000000
        flex 1
        text-align center
        font-size .28rem
        color #666
        border-bottom: 1px solid #ddd
        .active
          color #333
          font-weight 700
          position relative
          &:after
            content: ''
            position absolute
            bottom -0.21rem
            left 0
            right 0
            height .04rem
            background #2395ff

</style>
