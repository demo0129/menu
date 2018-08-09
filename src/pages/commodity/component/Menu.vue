<template>
  <div class="menu" ref="menuWrapper">
      <ul class="menu-list">
        <li
          class="menu-item"
          v-for="(item, index) in goods"
          :class="{active:number == index}"
          :key="item.name"
          ref="menuItem"
          @click="change(index, $event)"
        >{{item.name}}
        </li>
      </ul>
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
export default {
  name: 'Menu',
  props: {
    num: Number
  },
  data () {
    return {
      number: 0
    }
  },
  computed: {
    goods () {
      return this.$store.state.leftItems.goods
    }
  },
  watch: {
    num () {
      this.number = this.num
    }
  },
  methods: {
    change (index, $event) {
      this.number = index
      this.$emit('change', $event.target.innerText)
    }
  }
  // mounted () {
  //   this.scroll = new Bscroll(this.$refs.menuWrapper, {
  //     bounce: false
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
  .menu
    box-sizing border-box
    overflow hidden
    width 1.54rem
    height: 100%
    background-color: #f8f8f8
    .menu-list
      padding-bottom .8rem
      .menu-item
        box-sizing border-box
        font-size 13px
        color #666
        line-height 14px
        padding 17.5px 7.5px
        &.active
          background #fff
</style>
