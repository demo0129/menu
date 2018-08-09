<template>
  <div class="overview-wrapper">
    <div class="overview-seller">
      <div class="seller-score-num">
        <p class="score-num">{{seller.score}}</p>
      </div>
      <div class="seller-score-desc">
        <span class="score-desc-text">商家评分</span>
        <star :size="36" :score="seller.score"></star>
      </div>
    </div>
    <div class="overview-info">
      <div class="overview-info-left">
        <div class="info-item-wrapper">
          <span class="info-item">味道</span>
          <p class="info-num">{{seller.taste}}</p>
        </div>
        <div class="info-item-wrapper">
          <span class="info-item">包装</span>
          <p class="info-num">{{seller.package}}</p>
        </div>
      </div>
      <div class="overview-info-right">
        <span class="info-item">配送</span>
        <p class="info-num">{{seller.delivery}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../../common/star'
export default {
  name: 'Overview',
  components: {
    Star
  },
  computed: {
    seller () {
      return this.$store.state.leftItems.seller
    }
  }
}
</script>

<style lang="stylus" scoped>
  .overview-wrapper
    display flex
    margin-bottom .16rem
    padding .4rem 0 .6rem .48rem
    background #fff
    .overview-seller
      display flex
      width 2.52rem
      justify-content space-between
      align-items center
      .seller-score-num
        display flex
        .score-num
          color #ff6000
          font-size 38px
      .seller-score-desc
        display flex
        flex-direction column
        align-items: flex-start
        .score-desc-text
          font-size .24rem
          color #666
          margin-bottom .1rem
    .overview-info
      display flex
      flex 1
      align-items center
      color #666
      .overview-info-left
        display flex
        flex 1
        justify-content: space-between
        padding 0 .54rem
        .info-item-wrapper
          display flex
          flex-direction: column
          align-items: center
          .info-item
            font-size 12px
            margin-bottom .1rem
          .info-num
            font-size 20px
            font-weight 400
      .overview-info-right
        display flex
        width 1.71rem
        border-left 1px solid #ddd
        align-items: center
        flex-direction: column
        .info-item
          font-size 12px
          margin-bottom .1rem
        .info-num
          font-size 20px
          font-weight 400
</style>
