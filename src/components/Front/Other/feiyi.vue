<template>
<div class="feiyi-container">
  <section class="seal-box">
    <img class="seal-img"  src="./image/yinzhang.png">
    <span class="seal-title">非遗项目</span>
  </section>

  <section class="two-box">
     <div class="category">
        <div class="category-title">
          项目类别
        </div>
        <div class="category-detail">
          <div class="detail1">
            <span>武术类</span>
            <span>球&nbsp&nbsp类</span>
            <span>摔跤类</span>
          </div>
          <div class="detail1">
            <span>竞渡类</span>
            <span>游戏类</span>
            <span>舞龙类</span>
          </div>
          <div class="detail1">
            <span>舞狮类</span>
            <span>健舞类</span>
            <span>赛会类</span>
          </div>
        </div>
     </div>
    <div class="area">
      <div class="area-title">
        项目地区
      </div>
      <div class="area-detail">
        <div class="detail2">
          <span>广东</span>
          <span>湖南</span>
          <span>湖北</span>
        </div>
        <div class="detail2">
          <span>新疆</span>
          <span>广东</span>
          <span>广东</span>
        </div>
        <div class="detail2">
          <span>广东</span>
          <span>广东</span>
          <span>广东</span>
        </div>
      </div>
    </div>
  </section>

  <section class="feiyi-map">
    <div class="feiyi-map-title">
      项目地图
    </div>
    <div class="feiyi-map-box">
      <maps></maps>
    </div>

  </section>
</div>

</template>

<script type="text/ecmascript-6">
  import Maps from '@/components/Front/Frontcomponents/map'

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
          Maps
        }

    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .seal-box
    margin-top :86px
    display :flex
    margin-left :132px
    .seal-img
      width :40px
      height :60px
    .seal-title
      height :60px
      width :150px
      line-height :60px
      font-size :30px
      color: #5a3224
      font-family: '隶书'



  .two-box
    width :1640px
    height :200px
    margin :60px auto
    display flex
    .category
      width :600px
      height :250px
      background-image: url(./image/biankuang.png)
      background-repeat: no-repeat
      background-size: 600px 250px
      padding-top :1px
      .category-title
        color: #5a3224
        font-family: '隶书'
        font-size :30px
        height :40px
        width :160px
        margin-top :30px
        margin-left :40px
      .category-detail
        width :100%
        height :50%
        color: #5a3224
        font-family: '隶书'
        font-size :30px
      .detail1
        margin-top :10px
        span
          margin-left :80px

    .area
      margin-left :440px
      width :600px
      height :250px
      background-image: url(./image/biankuang.png)
      background-repeat: no-repeat
      background-size: 600px 250px
      padding-top :1px
      .area-title
        color: #5a3224
        font-family: '隶书'
        font-size :30px
        height :40px
        width :160px
        margin-top :30px
        margin-left :40px
      .area-detail
        width :100%
        height :50%
        color: #5a3224
        font-family: '隶书'
        font-size :30px
      .detail2
        margin-top :10px
        span
          margin-left :100px

  .feiyi-map
    width :1640px
    height :890px
    margin :132px auto
    padding-top :1px
    background-image: url(./image/biankuang2.png)
    background-repeat: no-repeat
    background-size: 1640px 890px
    .feiyi-map-title
      font-size :30px
      color: #5a3224
      font-family: '隶书'
      margin-top :50px
      margin-left:50px
    .feiyi-map-box
      margin :40px auto
      width :1520px
      height :726px
</style>
