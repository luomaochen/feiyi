<template>
  <div class="two-container">
    <div class="hot-container">
      <img class="hot-title" src="./image/title-remen.png">
      <span class="hot-more">更多></span>
      <article class="hot-item">
        <div class="hot-item-title">
          项目1 名称
        </div>
        <div class="hot-item-detail">
          项目1 概述
        </div>
        <div class="hot-item-content">
          阳光，水润一样，从遥远的天际，射出她艳美的光束，以独特的韵致，染绿着天空的蔚蓝，
          让鸟语花香，透着清澈，漾着希望，将五月的金黄，铺满着大地，使水润五月，为这个季节不争的美好。
        </div>
      </article>
      <article class="hot-item">
        <div class="hot-item-title">
          项目2 名称
        </div>
        <div class="hot-item-detail">
          项目2 概述
        </div>
        <div class="hot-item-content">
          如水一样的月，在太空盯着我傻笑，妩媚地，如有一丝少女的味道。钟，这时，我仿佛听见，远
          方飘来：“明月几时有？把酒问青天。月华润如酥，娇媚艳当洗。”那种韵致，让我不由自主，轻
          轻高举起酒杯，将酒向月儿浇去，她也仿佛已醉，不然她的那种轻飘，那种亮闪，怎会一下，
          又一下，钻入云层，又钻出云层，始终与我保持若离若合的距离。而我，却是想若非非，仿佛拥有浸
        </div>
      </article>
      <article class="hot-item">
        <div class="hot-item-title">
          项目3 名称
        </div>
        <div class="hot-item-detail">
          项目3 概述
        </div>
        <div class="hot-item-content">
          阳光，水润一样，从遥远的天际，射出她艳美的光束，以独特的韵致，染绿着天空的蔚蓝，
          让鸟语花香，透着清澈，漾着希望，将五月的金黄，铺满着大地，使水润五月，为这个季节不争的美好。
        </div>
      </article>
      <article class="hot-item">
        <div class="hot-item-title">
          项目4 名称
        </div>
        <div class="hot-item-detail">
          项目4 概述
        </div>
        <div class="hot-item-content">
          哈哈，我不禁傻傻痴笑，那种笑，是苦涩，是香溢，亦或甜蜜。总而言之，统而言之，任脸靥挂上一丝笑意，却为自己永远找
          不到的缘由，歌唱凝伫笔墨的文词散句，大珠小珠落玉盘，何须直爱五月间。
        </div>
      </article>
    </div>
    <div class="wonderful-container">
      <img class="won-title" src="./image/title-jingcai.png">
      <span class="won-more">更多></span>
      <div class="won-img-item">
        <img class="won-img" src="./image/lunboimg1.jpg">
        <article class="won-item1">
          <div class="won-item-title">
            项目1 名称
          </div>
          <div class="won-item-detail">
            项目1 概述
          </div>
          <div class="won-item-content">
            阳光，水润一样，从遥远的天际，射出她艳美的光束，以独特的韵致，染绿着天空的蔚蓝，
            让鸟语花香，透着清澈.
          </div>
        </article>
      </div>
      <article class="won-item" style="margin-top: -10px">
        <div class="won-item-title">
          项目2 名称
        </div>
        <div class="won-item-detail">
          项目2 概述
        </div>
        <div class="won-item-content">
          如水一样的月，在太空盯着我傻笑，妩媚地，如有一丝少女的味道。钟，这时，我仿佛听见，远
          方飘来：“明月几时有？把酒问青天。月华润如酥，娇媚艳当洗。”那种韵致，让我不由自主.
        </div>
      </article>
      <article class="won-item">
        <div class="won-item-title">
          项目3 名称
        </div>
        <div class="won-item-detail">
          项目3 概述
        </div>
        <div class="won-item-content">
          如水一样的月，在太空盯着我傻笑，妩媚地，如有一丝少女的味道。钟，这时，我仿佛听见，远
          方飘来：“明月几时有？把酒问青天。月华润如酥，娇媚艳当洗。”那种韵致，让我不由自主.
        </div>
      </article>
      <article class="won-item">
        <div class="won-item-title">
          项目4 名称
        </div>
        <div class="won-item-detail">
          项目4 概述
        </div>
        <div class="won-item-content">
          如水一样的月，在太空盯着我傻笑，妩媚地，如有一丝少女的味道。钟，这时，我仿佛听见，远
          方飘来：“明月几时有？把酒问青天。月华润如酥，娇媚艳当洗。”那种韵致，让我不由自主.
        </div>
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

  .two-container
    display: flex
    .hot-container
      width: 800px
      height: 860px
      background-image: url(./image/remenjingcai.png)
      background-repeat: no-repeat
      background-size: 800px 860px
      position: relative
      .hot-title
        margin: 58px 0 40px 62px
      .hot-more
        position: absolute
        top: 56px
        left: 649.6px
        font-size: 20px
        font-family: '隶书'
        color: #5a3224
        width: 80%
      .hot-item
        margin-top: 25px
        margin-left: 64px
        width: 85%
        height: 17%
        font-family: '隶书'
        color: #5a3224
        .hot-item-title
          font-size: 25px
          font-weight: bold
        .hot-item-detail
          margin-top: 8px
          margin-bottom: 5px
          font-size: 22px
          font-weight: 500
        .hot-item-content
          font-size: 19px
          font-weight: 500

    .wonderful-container
      margin-left: 108px
      width: 800px
      height: 860px
      background-image: url(./image/remenjingcai.png)
      background-repeat: no-repeat
      background-size: 800px 860px
      position: relative
      .won-title
        margin: 58px 0 40px 62px
      .won-more
        position: absolute
        top: 56px
        left: 649.6px
        font-size: 20px
        font-family: '隶书'
        color: #5a3224
        width: 80%
      .won-img-item
        height: 25%
        display: flex
        .won-img
          height: 70%
          width: 30%
          margin-left: 64px
          border solid #875c2e
        .won-item1
          width: 55%
          margin-top: 30px
          margin-left: 18px
          font-family: '隶书'
          color: #5a3224
          .won-item-title
            font-size: 25px
            font-weight: bold
          .won-item-detail
            margin-top: 8px
            margin-bottom: 5px
            font-size: 22px
            font-weight: 500
          .won-item-content
            font-size: 19px
            font-weight: 500
      .won-item
        margin-top: 25px
        margin-left: 64px
        width: 85%
        height: 17%
        font-family: '隶书'
        color: #5a3224
        .won-item-title
          font-size: 25px
          font-weight: bold
        .won-item-detail
          margin-top: 8px
          margin-bottom: 5px
          font-size: 22px
          font-weight: 500
        .won-item-content
          font-size: 19px
          font-weight: 500
</style>
