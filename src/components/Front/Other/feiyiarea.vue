<template>
  <div class="other-container">
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
      <span class="seal-title" style="width:300px">非遗项目>广东</span>
    </section>

    <section class="category-everycontent-container">
      <div class="everycontent-twobox" v-for="n in 5">
        <div class="everycontent-box1">
          <img class="everycontent-box1-left" src="./image/lunboimg2.jpg">
          <div class="everycontent-box1-right">
            <div class="everycontent-box1-right-title">项目名称</div>
            <div class="everycontent-box1-right-content">项目概述: 阿瑟斯发射点发射点士大。夫十分手动阀手动阀，手动阀手动阀手动阀手动阀是？</div>
          </div>
        </div>
        <div class="everycontent-box1">
          <img class="everycontent-box1-left" src="./image/lunboimg2.jpg">
          <div class="everycontent-box1-right">
            <div class="everycontent-box1-right-title">项目名称</div>
            <div class="everycontent-box1-right-content">项目概述: 啊实打实大撒大苏打萨达，安德森苏萨达萨达萨达萨达阿斯顿，打实打实大苏打实打实大苏打</div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script type="text/ecmascript-6">


  export default{
    data() {
      return {
        datas: [],
        id: '',
        qq:'',
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

  .category-everycontent-container
    width :1600px
    height :1710px
    margin :50px auto
    .everycontent-twobox
      width :100%
      height :294px
      display :flex
      margin-top :72px
      .everycontent-box1
        width :766px
        height :290px
        display :flex
        margin-left :150px
        background-image: url(./image/biankuang4.png)
        background-repeat: no-repeat
        background-size: 719px 290px
        &:nth-child(1)
          margin-left :5px
        .everycontent-box1-left
          width :220px
          height :224px
          margin :30px 0 0 30px
        .everycontent-box1-right
          width :406px
          height :224px
          margin :auto
          color: #5a3224
          font-family: '隶书'
          .everycontent-box1-right-title
            font-size :30px
            margin:15px 0 0 20px
          .everycontent-box1-right-content
            width :95%
            height :75%
            font-size :25px
            margin :30px 0 0 20px
</style>
