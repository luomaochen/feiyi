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

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .header
    height: 211px
    width: 100%
    padding-top: 55px
    padding-left: 80px
  //  background-color: aqua
    .head-info-box
      width: 1170px
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
      background-color: red
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
      margin :auto
      width: 896px
      height: 72px
      display :flex
      .art-input
        width: 720px
        height: 72px
        border-radius:10px
        font-size :45px
        font-family: '隶书'
      .art-submit
        background-color :#d4c7ad
        line-height :72px
        text-align :center
        margin-left :30px
        font-size: 50px
        font-family: '隶书'
        height: 72px
        width :146px
        border-radius:10px
        a
          text-decoration: none
          color: #5a3224

</style>
