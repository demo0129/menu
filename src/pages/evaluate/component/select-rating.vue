<template>
  <div class="select-rating">
    <ul class="select-list">
      <li
        v-for="(item, index) in ratinglist"
        :key="index"
        class="select-item"
        :class="[{ 'active':selectType===index }, { 'active-grey':selectType===index }, index === 3?'negative-item':'']"
        @click="handleClickActive(index)"
        >
        {{item.desc}}{{item.number}}
      </li>
    </ul>
    <div class="select-content" @click="iconChange">
      <span class="select-icon iconfont" :class="{'icon-active': iconShow == true}">&#xe65d;</span>
      <p>只看有内容的评价</p>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0
const MIDDLE = 1
const NEGATIVE = 2

export default {
  name: 'SelectRating',
  data () {
    return {
      selectType: 0,
      iconShow: false
    }
  },
  computed: {
    ratings () {
      return this.$store.state.leftItems.ratings
    },
    positive () {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    middle () {
      return this.ratings.filter((rating) => {
        return rating.rateType === MIDDLE
      })
    },
    negative () {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    },
    ratinglist () {
      return [
        {'desc': '全部', 'number': this.ratings.length},
        {'desc': '满意', 'number': this.positive.length},
        {'desc': '一般', 'number': this.middle.length},
        {'desc': '不满意', 'number': this.negative.length}]
    }
  },
  methods: {
    handleClickActive (num) {
      this.selectType = num
    },
    iconChange () {
      this.iconShow = !this.iconShow
    }
  }
}
</script>

<style lang="stylus" scoped>
  .select-rating
    padding .2rem .24rem 0 .24rem
    background #fff
    .select-list
      padding-bottom .2rem
      border-bottom: 1px solid #eee
      .select-item
        display inline-block
        padding 0 .18rem
        margin .07rem
        height 28px
        line-height 28px
        color #6d7885
        background-color #ebf5ff
        font-size 12px
        &.active
          color: #fff
          background-color: #0097ff
      .negative-item
        color #aaa
        background-color #f5f5f5
        &.active-grey
          color: #fff
          background-color: #ccc
    .select-content
      display flex
      align-items center
      padding-left 15px
      color #666
      border-bottom: 1px solid #eee
      height 40px
      .select-icon
        padding-right 4px
        font-size 12px
        color #76d572
        &.icon-active
          color #e8e8e8
</style>
