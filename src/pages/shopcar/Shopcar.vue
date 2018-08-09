<template>
  <div>
    <div class="shopcar">
      <div class="shopcar-icon" :class="{'add-change': addShow, 'scale': isScale}" @click="showList">
        <span class="iconfont shopcar-img" :class="{'img-add-change': addShow }">&#xe622;</span>
        <span class="shop-number" v-show="addShow">{{totalNumber}}</span>
      </div>
      <div class="shopcar-desc" @click="showListSpe">
        <p class="desc-price">￥{{totalMoney}}</p>
        <p class="desc-delivery">另需配送费4元</p>
      </div>
      <div class="account">去结算</div>
    </div>
    <div class="shop-list" :class="{'move-list': isMove }">
      <div class="list-header">满59减2</div>
      <div class="list-wrapper" :class="{'opacity-change': isMove }">
        <div class="list-nav">
          <div class="list-nav-text">
            <span class="text-desc">已选商品</span>
          </div>
          <div class="list-clear" @click="clearShopcar">
            <span class="clear">清空</span>
          </div>
        </div>
        <div class="list-info">
          <ul class="shopcar-list">
            <li class="shopcar-item" v-for="item in shopcars" :key="item.name">
              <span class="item-text-wrapper">
                <span class="item-text">{{item.name}}</span>
              </span>
              <span class="item-pice-wrapper">
                <span class="item-old-price" v-if="item.oldPrice">￥{{item.oldPrice}}</span>
                <span class="item-now-price">
                  <span class="price-icon iconfont">&#xe64f;</span>
                  {{item.price}}
                </span>
              </span>
              <div class="number-change-wrapper">
                <div class="number-change">
                  <div class="red-number iconfont" @click="decreaseQuantity(item)">&#xe65a;</div>
                  <div class="item-number">{{item.quantity}}</div>
                  <div class="add-number iconfont" @click="increaseQuantity(item)">&#xe64e;</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="background-shop" v-show="isMove" @touchmove.prevent @click="showListSpe"></div>
  </div>
</template>

<script>
export default {
  name: 'Shopcar',
  data () {
    return {
      isMove: false,
      isScale: false
    }
  },
  computed: {
    shopcars () {
      return this.$store.state.shopcars
    },
    addShow () {
      return this.shopcars.length > 0
    },
    totalNumber () {
      let total = 0
      for (let index in this.shopcars) {
        let shopcarItem = this.shopcars[index]
        total += shopcarItem.quantity
      }
      return total
    },
    totalMoney () {
      let totalCost = 0
      for (let index in this.shopcars) {
        let individualItem = this.shopcars[index]
        totalCost += individualItem.price * individualItem.quantity
      }
      return totalCost
    },
    shopiconChange: {
      get () {
        return this.$store.state.shopiconChange
      },
      set () {
      }
    }
  },
  watch: {
    shopiconChange () {
      this.shopicon()
    }
  },
  methods: {
    showList () {
      if (this.shopcars.length > 0) {
        this.isMove = !this.isMove
      }
    },
    showListSpe () {
      this.isMove = false
    },
    clearShopcar () {
      this.showList()
      this.$store.commit('clearShopcar')
    },
    increaseQuantity (item) {
      item.quantity++
      this.$store.commit('increaseQuantity', this.shopcars)
      this.shopicon()
    },
    shopicon () {
      this.isScale = !this.isScale
      setTimeout(() => {
        this.isScale = !this.isScale
      }, 300)
    },
    decreaseQuantity (item) {
      item.quantity--
      if (item.quantity <= 0) {
        if (this.shopcars.length > 1) {
          this.removeFromShopcars(item)
        } else {
          this.showList()
          this.removeFromShopcars(item)
        }
      }
      this.$store.commit('decreaseQuantity', this.shopcars)
    },
    removeFromShopcars (item) {
      this.shopcars.splice(this.shopcars.indexOf(item), 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl'
  @keyframes aaa {
    from { transform: scale(.8)}
    to{ transform: scale(1)}
  }
  .shopcar
    display flex
    align-items center
    z-index 20
    position fixed
    bottom 0
    left 0
    right 0
    height 1rem
    background rgba(61,61,63,.9)
    padding-left 1.58rem
    .shopcar-icon
      border-radius 100%
      border .1rem solid rgb(68, 68, 68)
      position absolute
      left .24rem
      bottom .16rem
      height .8rem
      width .8rem
      background #333
      display flex
      justify-content center
      align-items center
      &.add-change
        background #3190e8
      &.scale
        animation aaa .3s ease-in-out
      .shopcar-img
        font-size 21px
        color #666
        &.img-add-change
          color #fff
      .shop-number
        display block
        top -.1rem
        right -.1rem
        position absolute
        background-image linear-gradient(-90deg,#ff7416,#ff3c15 98%)
        font-size 12px
        border-radius 14px
        padding .04rem .1rem
        color #fff
    .shopcar-desc
      flex 1
      line-height 1.2
      .desc-price
        color #ffffff
        font-size 19px
        font-weight 400
      .desc-delivery
        color #999
        font-size 10px
    .account
      width 2.1rem
      height 100%
      line-height 1rem
      font-weight 700
      font-size 16px
      text-align: center
      color #ffffff
      background #38ca73
  .shop-list
    z-index 11
    position fixed
    bottom 1.4rem
    width 100%
    background #fff
    transition transform .3s ease
    transform translate3d(0,100%,0)
    &.move-list
      bottom 1rem
      transform translate3d(0,0,0)
    .list-header
      font-size .22rem
      text-align center
      line-height .4rem
      background #fffad6
      height .4rem
    .list-wrapper
      opacity 0
      &.opacity-change
        opacity 1
      .list-nav
        display flex
        height 1rem
        padding 0 .25rem
        background #eceff1
        align-items: center
        .list-nav-text
          flex 1
          .text-desc
            color #666
            font-size .28rem
            padding-left .1rem
            display inline-block
            border-left .07rem solid #2395ff
        .list-clear
          width 1rem
          text-align right
          .clear
            font-size 13px
      .list-info
        overflow auto
        max-height 6rem
        .shopcar-list
          flex none
          height 100%
          .shopcar-item
            display flex
            align-items center
            min-height .8rem
            padding 0.15rem 0.25rem 0.15rem 0
            margin-left 0.25rem
            border-bottom 1px solid #eee
            .item-text-wrapper
              flex 5.5
              display inline-block
              line-height normal
              .item-text
                display inline-block
                overflow: hidden;
                vertical-align: middle
                max-width 3.5rem
                font-size .32rem
                ellipsis()
            .item-pice-wrapper
              flex 2.5
              display block
              color #ff5339
              text-align right
              white-space nowrap
              font-weight 700
              position relative
              .item-old-price
                color #999
                font-size .2rem
                font-weight 400
                text-decoration:line-through
              .item-now-price
                font-size .32rem
                .price-icon
                  display inline-block
                  position absolute
                  right .3rem
                  bottom -.02rem
            .number-change-wrapper
              align-items: center
              flex 3
              text-align right
              .number-change
                display inline-flex
                align-items center
                .red-number
                  font-size .54rem
                  color #2396ff
                .item-number
                  display inline-block
                  text-align: center
                  width .52rem
                  vertical-align middle
                  color rgba(0,0,0,.87)
                  font-size .28rem
                  overflow hidden
                .add-number
                  font-size .54rem
                  color #2396ff
  .background-shop
    z-index 10
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    opacity .4
    transition opacity .3s ease

</style>
