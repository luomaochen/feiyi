<template>
  <div class="video-box">
    <div class="video-detail1" >
      <article class="video-item" v-for="n in 4">
        <a href="http://www.w3school.com.cn" target="_blank">
          <video src="./image/movie3.mp4">
            您的浏览器不支持video
          </video>
        </a>
      </article>
    </div>
    <div class="video-detail2" >
      <article class="video-item" v-for="n in 4">
        <a href="http://www.w3school.com.cn" target="_blank">
          <video src="./image/movie.mp4">
            您的浏览器不支持video
          </video>
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

  .video-box
    margin-top :64px
    height :578px
    .video-detail1
      height :50%
      display :flex
      .video-item
        width :375px
        height :255px
        margin-left :48px
        position:relative;
        &:nth-child(1)
          margin-left :0
        video
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%
          z-index :2
    .video-detail2
      height :50%
      display :flex
      .video-item
        width :375px
        height :255px
        margin-left :48px
        margin-top :34px
        position :relative
        &:nth-child(1)
          margin-left :0
        video
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%
          z-index :2
</style>
