<template>
  <div class="evaluate">
    <overview></overview>
    <select-rating></select-rating>
  </div>
</template>

<script>
import Overview from './component/overview'
import SelectRating from './component/select-rating'
export default {
  name: 'Evaluate',
  components: {
    Overview,
    SelectRating
  }
}
</script>

<style lang="stylus" scoped>
  .evaluate
    background #f5f5f5
</style>
