<template>
  <div class="commodity-warpper">
    <div class="commodity">
      <left-menu
        @change="handleFoodMove"
        :num="num"
      ></left-menu>
      <right-food
        :name="name"
        @moveMenu="handleMenuMove"
      ></right-food>
    </div>
  </div>
</template>

<script>
import LeftMenu from './component/Menu'
import RightFood from './component/food'
// import Bscroll from 'better-scroll'
export default {
  name: 'commodity',
  data () {
    return {
      name: '',
      num: 0
    }
  },
  components: {
    LeftMenu,
    RightFood
  },
  methods: {
    handleFoodMove (name) {
      this.name = name
    },
    handleMenuMove (num) {
      this.num = num
    }
  }
}
</script>

<style lang="stylus" scoped>
  .commodity-warpper
    box-sizing border-box
    height 12.52rem
    .commodity
      display flex
      box-sizing border-box
      height 100%
      padding-bottom 1rem
      color #333
</style>
