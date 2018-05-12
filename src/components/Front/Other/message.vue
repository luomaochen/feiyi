<template>
  <div>
    <section class="seal-box">
      <img class="seal-img"  src="./image/yinzhang.png">
      <span class="seal-title">信息动态</span>
    </section>

    <section class="message-change">
      <div class="message-change-title">
        消息动态
      </div>
      <article class="change1">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="change1">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="change1">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="change1">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="change1">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
    </section>

    <section class="academic-research">
      <div class="academic-research-title">
        联系我们
      </div>
      <article class="connect2">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="connect2">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="connect2">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="connect2">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
      <article class="connect2">
        <span>消息111111111111111111111111111111111111111111111111</span>
        <span>2018-05-12</span>
      </article>
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
    methods: {},
    created() {

    },
    components: {
      Foots
    }

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .message-change
    height :308px
    width :1560px
    margin :54px auto
    background-image: url(./image/biankuang5.png)
    background-repeat: no-repeat
    background-size: 1560px 308px
    overflow :hidden
    color: #5a3224
    font-family: '隶书'
    .message-change-title
      margin-top :30px
      margin-left :30px
      font-size :30px
    .change1
      margin-top :15px
      margin-left :35px
      margin-right :45px
      font-size :24px
      display :flex
      justify-content:space-between


  .academic-research
    height :308px
    width :1560px
    margin :120px auto
    margin-bottom :150px
    background-image: url(./image/biankuang5.png)
    background-repeat: no-repeat
    background-size: 1560px 308px
    overflow :hidden
    color: #5a3224
    font-family: '隶书'
    .academic-research-title
      margin-top :30px
      margin-left :30px
      font-size :30px
    .connect2
      margin-top :15px
      margin-left :35px
      margin-right :45px
      font-size :24px
      display :flex
      justify-content:space-between

  .hr
    width: 1800px
    height: 20px
    margin: 38px auto
    background-image: url(./image/fenge2.png)
    background-size: 1800px 20px

</style>
