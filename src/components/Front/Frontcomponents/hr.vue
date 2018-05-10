<template>
    <div class="title">
      <div class="title-left"></div>
      <img :src="hrimg">
      <div class="title-right"></div>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'carrousel',
    data () {
    return {
      }
    },
    props: ['hrimg'],


  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .title
      display :flex
      width :1375px
      height :50px
      margin :auto
      .title-left
        margin-top :24.5px
        margin-right :-150px
        width :40%
        height :2px
        background-color :#593324
      .tittle-middle
        margin-top :10px
      .title-right
        margin-top :24.5px
        margin-left :-150px
        width :40%
        height :2px
        background-color :#593324

</style>
