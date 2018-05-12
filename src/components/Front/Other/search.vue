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

  <section class="seal-box" style="margin-left: 250px">
    <img class="seal-img"  src="./image/yinzhang.png">
    <span class="seal-title" style="width:300px">搜索结果</span>
  </section>

  <section class="search-result-container">
    <div class="result-box" v-for="n in 10">
      <span class="result-title">
        标题1XXXXXXXXXX
      </span>
      <div class="result-time">
        <span class="result-time-nyr">
          2018-05-12
        </span>
        <span class="result-time-sfm">
          16:23:42
        </span>
      </div>
    </div>
  </section>

  <div class="hr"></div>

  <foots></foots>
</div>

</template>

<script type="text/ecmascript-6">
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
            Foots
        }

    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .other-href3
    color red
    background-image: url(./image/huizhang.png)
    background-repeat: no-repeat
    background-size: 100% 100%


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


  .search-result-container
    width :1436px
    margin :70px auto
    .result-box
      width :90%
      height :70px
      margin :35px auto
      display :flex
      justify-content:space-between
      cursor :pointer
      .result-title
        color: #5a3223
        font-size: 27px
        font-family: '隶书'
        font-weight :bold
      .result-time
        width :23%
        height :70px
        color: #5a3223
        font-size: 20px
        font-family: '隶书'
        font-weight :bold
        .result-time-nyr
          margin-left :55px



</style>
