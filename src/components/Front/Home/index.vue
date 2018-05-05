<template>
  <div class="index-container">
    <header class="header">
      <div class="head-info-box">
        <img class="head-image" src="./image/logo.png">
        <span class="big-title">中国体育非物质文化遗产</span>
        <div class="small-title">各族人民世代相承与群众生活密切相关各种传统文化表现形式和文化空间</div>
      </div>
    </header>
    <nav class="nav">
      <ul class="nav-ul">
        <li><a href="#">首页</a></li>
        <li><a href="#">非遗项目</a></li>
        <li><a href="#">传承人</a></li>
        <li><a href="#">信息动态</a></li>
        <li><a href="#">域外项目</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </nav>
    <article class="nav-article">
      <form class="art-form">
        <input class="art-input" type="text" name="username"/>
        <div class="art-submit"><a href="#">搜索</a></div>
      </form>
    </article>
    <section class="lunbo-img">
      <div id="lunbo-container">
        <div class="title-left">
          图片标题这是一幅非常不错的不错的体育运动图片这真的很棒！
        </div>
        <div class="swiper">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide games"><img src="./image/lunboimg1.jpg"></swiper-slide>
            <swiper-slide class="swiper-slide games"><img src="./image/lunboimg2.jpg" ></swiper-slide>
            <swiper-slide class="swiper-slide games"><img src="./image/lunboimg3.jpg"></swiper-slide>
            <swiper-slide class="swiper-slide games"><img src="./image/lunboimg4.jpg"></swiper-slide>
            <swiper-slide class="swiper-slide games"><img src="./image/lunboimg5.jpg"></swiper-slide>
          </swiper>
        </div>
        <div class="title-right">
          <img src="./image/yinzhang.png">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <div class="hr"></div>
    <section class="jiansuo">
      <myhr></myhr>
      <article class="leibie">
        <span>
          <div><img src="./image/wushu.png"></div>
          <div class="leibie-title">武术类</div>
        </span>
        <span>
          <div><img src="./image/qiu.png"></div>
          <div class="leibie-title">球类</div>
        </span>
        <span>
          <div><img src="./image/shuaijiao.png"></div>
          <div class="leibie-title">摔跤类</div>
        </span>
        <span>
          <div><img src="./image/jingdu.png"></div>
          <div class="leibie-title">竞渡类</div>
        </span>
        <span>
          <div><img src="./image/youxi.png"></div>
          <div class="leibie-title">游戏类</div>
        </span>
        <span>
          <div><img src="./image/wulong.png"></div>
          <div class="leibie-title">舞龙类</div>
        </span>
        <span>
          <div><img src="./image/wushi.png"></div>
          <div class="leibie-title">舞狮类</div>
        </span>
        <span>
          <div><img src="./image/jianwu.png"></div>
          <div class="leibie-title">健舞类</div>
        </span>
        <span>
          <div><img src="./image/saihui.png"></div>
          <div class="leibie-title">赛会类</div>
        </span>
      </article>
      <article class="jibie"></article>
    </section>


  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Myhr from '@/components/Front/Frontcomponents/hr'
  export default {
    name: 'carrousel',
    data () {
      return {
        swiperOption: {
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 3000,//5秒切换一次
          },
          effect : 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '" style="color:#5a3223">' + (index + 1) + '</span>';
            },
          },
          loop: true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      Myhr
    },
    methods: {},
    mounted: function () {
      console.log('mounted swiper')
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">


  .header
    height: 211px
    width: 1880px
    padding-top: 55px
    padding-left: 80px
  //  background-color: aqua
    .head-info-box
      width: 1500px
      height: 156px
      /*background-color blueviolet*/
      .head-image
        margin-top: 4px
        height: 70px
        width: 108px
      .big-title
        margin-left: 20px
        font-size: 74px
        color: #5a3223
        font-weight: 500
        letter-spacing: 12px
        font-family: '隶书'
      .small-title
        margin-top: 45px
        color: #5a3223
        font-size: 28px
        font-family: '隶书'

  .nav
    width: 1792px
    height: 70px
    margin: 24px auto
    background-image: url(./image/fenge1.png)
    .nav-ul
      list-style: none
      li
        float: left
        line-height: 70px
        text-align: center
        margin-left: 90px
        font-size: 50px
        a
          text-decoration: none
          color: #5a3224
          font-family: '隶书'

  .nav-article
    margin: 22px
    .art-form
      margin: auto
      width: 896px
      height: 72px
      display: flex
      .art-input
        width: 720px
        height: 72px
        border-radius: 10px
        font-size: 45px
        font-family: '隶书'
        outline: none
      .art-submit
        background-color: #d4c7ad
        line-height: 72px
        text-align: center
        margin-left: 30px
        font-size: 50px
        font-family: '隶书'
        height: 72px
        width: 146px
        border-radius: 10px
        a
          text-decoration: none
          color: #5a3224

  .lunbo-img
    width: 1728px
    height: 730px
    margin: auto
    position :relative
    background-image: url(./image/juanzhou.png)
    background-size: 1728px 730px
    #lunbo-container
      position :absolute
      top: 70px
      left :160px
      margin: auto
      width:80%
      height: 80%
      display :flex
      .title-left
        width :81px
        writing-mode: vertical-lr/*从左向右 从右向左是 writing-mode: vertical-rl;*/
        margin-top :20px
        font-family: '隶书'
        font-size: 25px
        line-height :35px
        color: #5a3224
      .swiper
          width :1120px
          height :550px
          margin auto
          .swiper-slide
            width :1120px
            height :550px
            background: #234356
            img
              width:1120px
              height:550px
        .title-right
          width :81px
          img
            margin-top :56px
            margin-left :5px
            width :48px
            height :48px
          .swiper-pagination
            position:relative
            width:30px
            margin-top :200px
            margin-left :15px
          .swiper-pagination-bullet
            width:30px
            height :30px
            line-height :30px
            color :#5a3223
            text-align :center
            margin-top :8px
            border :solid #9a7c69
            background :rgb(255,255,255)
          .swiper-pagination-bullet-active
            background:#898989
  .hr
    width: 1800px
    height: 20px
    margin: 38px auto
    background-image: url(./image/fenge2.png)
    background-size: 1800px 20px
  .jiansuo
    width :1728px
    height :362px
    margin :auto
    /*background-color :aqua*/
    .leibie
      margin-top :15px
      display :flex
      span
        width :156px
        height :130px
        margin-left :35px
        img
          display :block
          width :100px
          height :83px
          margin :auto
          text-align :center
        .leibie-title
          width :156px
          height :40px
          margin :auto
          text-align :center
          font-size :35px
          color :#5a3324
          font-family: '隶书'





</style>
