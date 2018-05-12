<template>
<div>
  <section class="seal-box">
    <img class="seal-img"  src="./image/yinzhang.png">
    <span class="seal-title">关于我们</span>
  </section>

  <section class="about-us">
    <div class="about-us-title">
      关于我们
    </div>
    <div class="about-us-content">
      我们的身份打发手动阀手动阀手动阀手动阀是手动阀手动阀手动阀十分手动阀手动阀手动阀十分士大夫手动阀手动阀手动阀十分手动阀手动阀手动阀士大夫
    </div>
  </section>

  <section class="connect-us">
    <div class="connect-us-title">
      联系我们
    </div>
    <article class="connect1">
      深圳市深圳大学飒飒的阿斯顿
    </article>
    <article class="connect1">
      联系地址：深圳市XXXXXXXXXXXXX
    </article>
    <article class="connect1">
      邮编：518000
    </article>
    <article class="connect1">
      电话：0755-23222222
    </article>
    <article class="connect1">
      传真：0755-23222222
    </article>
    <article class="connect1">
      工作时间：周一至周五（节假日除外）9:00--17:00
    </article>
    <article class="connect1">
      Email:aaaaaaaaaa@qq,com
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

  .about-us
    height :308px
    width :1560px
    margin :54px auto
    background-image: url(./image/biankuang5.png)
    background-repeat: no-repeat
    background-size: 1560px 308px
    overflow :hidden
    color: #5a3224
    font-family: '隶书'
    .about-us-title
      margin-top :30px
      margin-left :30px
      font-size :30px
    .about-us-content
      height :60%
      width :95%
      font-size :25px
      margin :30px auto



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
      margin-top :15px
      margin-left :30px
      font-size :24px

  .hr
    width: 1800px
    height: 20px
    margin: 38px auto
    background-image: url(./image/fenge2.png)
    background-size: 1800px 20px

</style>
