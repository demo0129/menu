<template>
  <div class="foods" ref="foodWrapper">
    <ul class="food-wrapper">
      <li
        class="food-list"
        v-for="item in goods"
        :key="item.name"
        :ref="item.name"
      >
        <h1 class="title">{{item.name}}</h1>
        <ul class="food-item-list">
          <li v-for="food in item.foods" :key="food.item" class="food-item">
            <div class="icon">
              <img class="icon-img" :src="food.icon">
            </div>
            <div class="content">
              <h2 class="food-name" ref="foodName">{{food.name}}</h2>
              <p class="food-desc">{{food.description}}</p>
              <div class="extra">
                <span>月售{{food.sellCount}}份</span>
                <span v-show="food.rating">好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="food-pice">￥{{food.price}}</span>
                <span class="old-price" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                <span class="iconfont add-icon" @click="addFood(food)">&#xe64e;</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'food',
  props: {
    name: String
  },
  data () {
    return {
      scrollY: '',
      listHeight: []
    }
  },
  computed: {
    shopcars () {
      return this.$store.state.shopcars
    },
    goods () {
      return this.$store.state.leftItems.goods
    },
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  watch: {
    goods () {
      this.$nextTick(() => {
        this.initScroll()
        this.calculateHeight()
      })
    },
    name () {
      if (this.name) {
        const element = this.$refs[this.name][0]
        this.scroll.scrollToElement(element)
      }
    },
    currentIndex () {
      this.$emit('moveMenu', this.currentIndex)
    }
  },
  methods: {
    addFood (data) {
      let shopcar = {
        name: data.name,
        price: data.price,
        quantity: 1
      }
      let eggs = 0
      if (this.shopcars.length > 0) {
        this.shopcars.forEach((item) => {
          if (item.name === shopcar.name) {
            eggs++
            item.quantity++
          }
        })
        if (eggs === 0) {
          this.shopcars.push(shopcar)
        }
        // let result = state.shopcars.filter((data) => {
        //   return (state.shopcars.name === data.name)
        // })
        // if (result != null && result > 0) {
        //   result[0].quantity++
        // }
      } else {
        this.shopcars.push(shopcar)
      }
      this.$store.commit('addShopcar', this.shopcars)
      this.$store.commit('shopiconChange')
      // this.$axios.post('https://wd9077913423avyuea.wilddogio.com/wwdmenu.json', shopcar)
      //   .then(res => {
      //     console.log(res)
      //   })
    },
    initScroll () {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.foodWrapper, {
          probeType: 3,
          bounce: false
        })
        this.scroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        }, true)
      } else {
        this.scroll.refresh()
      }
    },
    calculateHeight () {
      let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .foods
    box-sizing border-box
    overflow: hidden
    height 100%
    flex 1
    .food-wrapper
      padding-bottom .8rem
      .title
        padding-left .2rem
        height .56rem
        line-height .56rem
        font-size 12px
        font-weight 700
        color #666
      .food-item-list
        padding-left .2rem
        .food-item
          display flex
          height 1.9rem
          padding .2rem 0
          overflow hidden
          .icon
            .icon-img
              height 1.9rem
              width 1.9rem
              margin-right .2rem
          .content
            flex 1
            position relative
            .food-name
              color #333
              font-size .3rem
              line-height 1.2
              font-weight 700
            .food-desc
              margin .1rem 0
              color #999
              font-size .25rem
              width 3.2rem
              ellipsis()
          .extra
            color #999
            font-size .25rem
            margin .1rem 0
          .price
            position absolute
            box-sizing border-box
            padding-right .4rem
            width 100%
            bottom 0
            left 0
            .food-pice
              line-height .56rem
              color #ff5339
              font-size .36rem
            .old-price
              color #999
              font-size .24rem
              text-decoration:line-through
            .add-icon
              color #2396ff
              font-size .56rem
              float right
</style>
