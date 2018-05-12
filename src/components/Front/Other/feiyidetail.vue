<template>
  <div>
    <header class="other-header">
      <div class="other-left">
        <img class="logo-img" src="./image/LOGO.png">
        <div class="logo-title">
          中国体育
        </div>
        <div class="logo-title">
          非物质文化遗产
        </div>
      </div>
      <div class="header-right">
        <article class="nav-article">
          <form class="art-form">
            <input class="art-input" type="text" name="username"/>
            <div class="art-submit"><a href="#">搜索</a></div>
          </form>
        </article>
        <nav class="nav">
          <ul class="nav-ul">
            <li @click="go('Home_index')">首页</li>
            <li><router-link class="other-href other-href3"  to="/other/feiyi">非遗项目</router-link></li>
            <!--<li><router-link class="other-href" to="/other/next">传承人</router-link></li>-->
            <li><router-link class="other-href" to="/other/message">信息动态</router-link></li>
            <!--<li><router-link class="other-href" to="/other/abroad">域外项目</router-link></li>-->
            <li><router-link class="other-href" to="/other/myself">关于我们</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="hr"></div>


    <section class="nav-top">
      <section class="seal-box" >
        <img class="seal-img"  src="./image/yinzhang.png">
        <span class="seal-title" style="width:450px">XXXXX项目</span>
      </section>
      <section class="detail-info">
        <span >项目编号：A11111111</span>
        <span >项目地区：新疆</span>
      </section>
    </section>

    <section class="detail-all" v-for="n in 7">
      <div class="detail-all-title">
        概述
      </div>
      <div class="detail-all-messagebox">
        <p class="detail-all-content">
          据推测，夏至应该是其中之一。古代中国最初使用“土圭日影法”来测定一年中白昼最长和最短的日子，
          《周礼·地官》中的“大司徒”一则说：“以土圭之法，测土深，正日景，以求地中。”可见，先人采用
          土圭测日影的方法，发现这一天白昼最长，夜晚最短，因而确定了夏至，后来又发展为二十四节气之一。
        </p>
        <img class="detail-all-img" src="./image/lunboimg2.jpg">
      </div>
    </section>

    <section class="detail-map">
      <div class="detail-map-title">
        项目地图
      </div>
      <div class="detail-map-box">
        <maps></maps>
      </div>
    </section>

    <section class="relevant-img">
      <div class="relevant-img-title">
        相关图片
      </div>
      <div class="flex-box">
      <div class="relevant-img-box" v-for="n in 4">
        <img  src="./image/lunboimg2.jpg">
        <div class="relevant-img-content">
          图片描述XXXXX
        </div>
      </div>
      </div>
    </section>

    <section class="relevant-video">
      <div class="relevant-video-title">
        相关视频
      </div>
      <div class="flex-box">
        <div class="relevant-video-box" v-for="n in 4">
          <video src="./image/movie.mp4">
            您的浏览器不支持video
          </video>
          <div class="relevant-video-content">
            视频描述XXXXX
          </div>
        </div>
      </div>
    </section>

    <section class="connect-us">
      <div class="connect-us-title">
        项目动态
      </div>
      <article class="connect1">
        项目动态 1111111111111111111111111111111111111111
      </article>
      <article class="connect1">
        项目动态 1111111111111111111111111111111111111111
      </article>
      <article class="connect1">
        项目动态 1111111111111111111111111111111111111111
      </article>
      <article class="connect1">
        项目动态 1111111111111111111111111111111111111111
      </article>
      <article class="connect1">
        项目动态 1111111111111111111111111111111111111111
      </article>
    </section>

    <div class="hr"></div>
    <foots></foots>
  </div>

</template>

<script type="text/ecmascript-6">
  import Maps from '@/components/Front/Frontcomponents/map'
  import Foots from '@/components/Front/Frontcomponents/foot'

  export default{
    data() {
      return {
        datas: [],
        id: ''
      }
    },
    methods: {
      go(name){
        this.$router.push({
          name: name
        })
      }
    },
    created() {

    },
    components: {
        Maps,
        Foots
    }

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .other-header
    height :290px
    width :100%
    display :flex
    .other-left
      width :230px
      height :172px
      margin-left :160px
      margin-top :86px
      .logo-img
        width :150px
        height :100px
        display :block
        margin :auto
      .logo-title
        color: #5a3223
        font-size: 27px
        font-family: '隶书'
        text-align :center
    .header-right
      margin-left:-10px
      width :1400px
      .nav-article
        margin-top: 64px
        margin-right :-855px
        .art-form
          margin: auto
          width: 896px
          height: 72px
          display: flex
          .art-input
            width: 628px
            height: 50px
            border-radius: 10px
            font-size: 35px
            font-family: '隶书'
            outline: none
          .art-submit
            background-color: #d4c7ad
            line-height: 50px
            text-align: center
            margin-left: 30px
            font-size: 30px
            font-family: '隶书'
            height: 50px
            width: 80px
            border-radius: 10px
            a
              text-decoration: none
              color: #5a3224
      .nav
        width: 1490px
        height: 60px
        margin: 54px auto
        .nav-ul
          list-style: none
          li
            float: left
            line-height: 60px
            text-align: center
            margin-left: 150px
            font-size: 45px
            text-decoration: none
            color: #5a3224
            font-family: '隶书'
            cursor: pointer
            a
              text-decoration: none
              color: #5a3224
  .hr
    width: 1800px
    height: 20px
    margin: 0 auto
    background-image: url(./image/fenge2.png)
    background-size: 1800px 20px


  .nav-top
    display :flex
    justify-content:space-between
    width :1600px
    height :132px
    margin :10px auto
    margin-bottom :150px
    .seal-box
      margin-left :100px
    .detail-info
      width :50%
      height :100%
      color: #5a3223
      font-size: 27px
      font-family: '隶书'
      span
        display inline-block
        margin-top :100px
        margin-left :30px
        &:nth-child(1)
          margin-left :250px


  .detail-all
    width :1560px
    height :400px
    margin :50px auto
    background-image: url(./image/biankuang6.png)
    background-repeat: no-repeat
    background-size: 1560px 400px
    overflow :hidden
    .detail-all-title
      color: #5a3223
      font-size: 32px
      font-family: '隶书'
      margin-top :30px
      margin-left :50px
    .detail-all-messagebox
      height :75%
      width :95%
      margin :10px auto
      display flex
      .detail-all-content
        width :70%
        height :90%
        margin-left :10px
        color: #5a3223
        font-size: 25px
        font-family: '隶书'
      .detail-all-img
        width :400px
        height :284px
        display :inline-block
        margin-top :10px
        margin-left :100px



  .detail-map
    width :1640px
    height :890px
    margin :132px auto
    margin-bottom :0
    padding-top :1px
    background-image: url(./image/biankuang2.png)
    background-repeat: no-repeat
    background-size: 1640px 890px
    .detail-map-title
      font-size :30px
      color: #5a3224
      font-family: '隶书'
      margin-top :50px
      margin-left:50px
    .detail-map-box
      margin :40px auto
      width :1520px
      height :726px



  .relevant-img
    width :1560px
    height :400px
    margin :50px auto
    background-image: url(./image/biankuang6.png)
    background-repeat: no-repeat
    background-size: 1560px 400px
    overflow :hidden
    .relevant-img-title
      color: #5a3223
      font-size: 32px
      font-family: '隶书'
      margin-top :30px
      margin-left :50px
    .flex-box
      display :flex
      .relevant-img-box
        width :340px
        height :300px
        margin-left :40px
        margin-top :35px
        img
          width :335px
          height :230px
        .relevant-img-content
          text-align :center
          color: #5a3223
          font-size: 25px
          font-family: '隶书'

  .relevant-video
    width :1560px
    height :400px
    margin :50px auto
    background-image: url(./image/biankuang6.png)
    background-repeat: no-repeat
    background-size: 1560px 400px
    overflow :hidden
    .relevant-video-title
      color: #5a3223
      font-size: 32px
      font-family: '隶书'
      margin-top :30px
      margin-left :50px
    .flex-box
      display :flex
      .relevant-video-box
        width :340px
        height :300px
        margin-left :40px
        margin-top :35px
        video
          width :335px
          height :230px
        .relevant-video-content
          text-align :center
          color: #5a3223
          font-size: 25px
          font-family: '隶书'

  .connect-us
    height :400px
    width :1560px
    margin :54px auto
    background-image: url(./image/biankuang6.png)
    background-repeat: no-repeat
    background-size: 1560px 400px
    overflow :hidden
    color: #5a3224
    font-family: '隶书'
    .connect-us-title
      margin-top :30px
      margin-left :30px
      font-size :30px
    .connect1
      margin-top :25px
      margin-left :35px
      font-size :24px
</style>



