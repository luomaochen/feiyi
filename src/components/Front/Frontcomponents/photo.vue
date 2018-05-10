<template>
  <div class="photo-box">
    <div class="photo-detail1" >
      <article class="photo-item" v-for="n in 4">
        <a href="http://www.w3school.com.cn" target="_blank">
          <img src="./image/lunboimg1.jpg">
        </a>
      </article>
    </div>
    <div class="photo-detail2" >
      <article class="photo-item" v-for="n in 4">
        <a href="http://www.w3school.com.cn" target="_blank">
          <img src="./image/lunboimg2.jpg">
        </a>
      </article>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

    export default{
        data() {
            return {
                datas: [],
                id: ''
            }
        },
        methods: {},
        created() {

        },
        components: {}

    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .photo-box
    margin-top :64px
    height :578px
    .photo-detail1
      height :50%
      display :flex
      .photo-item
        width :375px
        height :255px
        margin-left :48px
        z-index :2
        &:nth-child(1)
          margin-left :0
        img
          width :375px
          height :255px
    .photo-detail2
      height :50%
      display :flex
      .photo-item
        width :375px
        height :255px
        margin-left :48px
        margin-top :34px
        z-index :2
        &:nth-child(1)
          margin-left :0
        img
          width :375px
          height :255px

</style>
