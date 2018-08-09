<template>
  <div>
    <div class="shop-header">
      <div class="header-bg">
      </div>
      <div class="header-content-warpper" @click="sellerShow">
        <img class="header-img" src="//fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" />
        <div class="header-content">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="header-detail">
          <span class="detail">评价{{seller.score}}&nbsp; &nbsp;</span>
          <span class="detail">月售{{seller.monthtotal}}单&nbsp;&nbsp;</span>
          <span class="detail">商家配送约{{seller.time}}分钟</span>
        </div>
        <div class="header-text">{{seller.bulletin}}</div>
      </div>
      <div class="youhui-warpper">
        <div class="manjian-warpper">
          <div class="manjian">
            <span class="manjian-icon-warpper">
              <span class="manjian-icon">满减</span>
            </span>
            <span class="manjian-detail" v-if="seller.supports">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="youhui">11个优惠</div>
      </div>
    </div>
    <div class="header-seller" v-show="shows" @touchmove.prevent @click="sellerHidden">
      <transition enter-active-class="animated zoomIn">
        <div class="seller-wrapper" v-show="shows">
          <div class="seller-content">
            <span class="seller-brand"></span>
            <span class="seller-name">{{seller.name}}</span>
          </div>
          <ul class="desc-list">
            <li class="desc-item">
              <p class="info-desc">{{seller.score}}</p>
              <p class="info-item">评分</p>
            </li>
            <li class="desc-item">
              <p class="info-desc">{{seller.monthtotal}}</p>
              <p class="info-item">月售</p>
            </li>
            <li class="desc-item">
              <p class="info-desc">{{seller.description}}</p>
              <p class="info-item">约{{seller.time}}分钟</p>
            </li>
            <li class="desc-item">
              <p class="info-desc">{{seller.deliveryPrice}}</p>
              <p class="info-item">配送费</p>
            </li>
            <li class="desc-item">
              <p class="info-desc">{{seller.distance}}</p>
              <p class="info-item">距离</p>
            </li>
          </ul>
          <div class="gonggao">
            <span class="gonggao-item">公告</span>
          </div>
          <div class="seller-bulletin">{{seller.bulletin}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    seller: Object
  },
  data () {
    return {
      shows: false
    }
  },
  methods: {
    sellerShow () {
      this.shows = true
    },
    sellerHidden () {
      this.shows = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/varibles.styl'
  @import '../../assets/styles/mixins.styl'
  .shop-header
    padding-bottom .32rem
    .header-bg
      width: 100%
      height: 1.8rem
      background-image: url("//fuss10.elemecdn.com/a/18/98a6fbe63ba82a35875430f7305c7png.png?imageMogr/format/webp/")
      background-repeat: no-repeat
      background-size: cover
      background-position 50%
      &:before
        content: ""
        position: absolute
        height: 1.8rem
        left: 0
        right: 0
        top: 0
        bottom: 0
        background-image linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5))
    .header-content-warpper
      height 1.49rem
      padding 0.6rem 0.3rem 0 0.3rem
      position relative
      .header-img
        height 1.3rem
        width 1.3rem
        position absolute
        top -.88rem
        left 3.1rem
      .header-content
        /*width 6.9rem*/
        text-align center
        font-size 0
        .brand
          display inline-block
          width .72rem
          height .36rem
          bg-image('brand')
          background-size 0.72rem 0.36rem
          background-repeat no-repeat
          padding-right .12rem
          margin-top .06rem
          vertical-align top
        .name
          font-size: .41rem
          line-height: 1.2em
          font-weight: 700
          position relative
          &:after
            position absolute
            top .12rem
            right:-0.36rem
            content ''
            border-top 6px solid transparent
            border-right 6px solid transparent
            border-bottom 6px solid transparent
            border-left 6px solid rgba(0,0,0,.67)

      .header-detail
        height .24rem
        line-height .24rem
        margin-top .13rem
        font-size .22rem
        text-align center
        /*.detail*/
          /*&:after*/
            /*content: " \B7 "*/
            /*opacity 0*/
      .header-text
        height .264rem
        line-height .264rem
        margin 0.17rem 1.3rem 0.2rem 1.3rem
        text-align center
        font-size .22rem
        font-weight 300
        color #999
        ellipsis()
    .youhui-warpper
        display flex
        height .264rem
        padding 0.1rem 0.16rem
        margin 0 0.48rem
        border 0.01rem solid #eee
        border-radius 0.02rem
        .manjian-warpper
          flex 1
          .manjian
            display flex
            font-size .347rem
            .manjian-icon-warpper
              position relative
              width .38rem
              background rgb(240, 115, 115)
              padding 0.04rem 0.09rem
              margin-right .12rem
              .manjian-icon
                position absolute
                top 0.04rem
                display flex
                color #fff
                font-size .06rem
            .manjian-detail
              flex 1
              font-size .22rem
              line-height 1.27
        .youhui
          position relative
          width 1rem
          padding-right .22rem
          font-size .22rem
          line-height 1.27
          color #666
          &:after
            content ''
            position absolute
            top 0.077rem
            right 0
            border-top .1rem solid rgba(0,0,0,.57)
            border-right .1rem solid transparent
            border-bottom .1rem solid transparent
            border-left .1rem solid transparent
  .header-seller
    z-index 100
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background rgba(0,0,0,.5)
    display flex
    justify-content center
    align-items center
    .seller-wrapper
      z-index 101
      width 4.77rem
      background #fff
      padding .5rem
      border-radius 0.08rem
      overflow hidden
      animation-duration 0.2s
      .seller-content
          height 1rem
          width 100%
          text-align center
          font-size 0
          .seller-brand
            display inline-block
            width .72rem
            height .36rem
            bg-image('brand')
            background-size 0.72rem 0.36rem
            background-repeat no-repeat
            padding-right .12rem
            margin-top .16rem
            vertical-align top
          .seller-name
            font-size: .41rem
            line-height: 1.2em
            font-weight: 700
        .desc-list
          box-sizing border-box
          display flex
          width 5.76rem
          margin .38rem 0 0 -0.5rem
          .desc-item
            flex 1
            display inline-block
            float left
            text-align center
            .info-desc
              color #333
              font-size 0.28rem
              font-weight 600
              margin-bottom 0.14rem
            .info-item
              font-size .2rem
              color #999
        .gonggao
          box-sizing border-box
          width 1.52rem
          height .336rem
          margin 0.36rem auto 0.2rem
          text-align center
          background-image: linear-gradient(90deg,#fff,#333 50%,#fff)
          background-size: 100% 1px
          .gonggao-item
            font-size .22rem
            padding 0 .08rem
            color: #999
            background-color: #fff
        .seller-bulletin
          max-height 2rem
          ellipsis()
          white-space normal
          font-size 13px
          line-height 1.54
</style>
