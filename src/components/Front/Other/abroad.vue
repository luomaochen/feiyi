<template>
  <div class="abroad-container">
    <section class="seal-box">
      <img class="seal-img"  src="./image/yinzhang.png">
      <span class="seal-title">域外项目</span>
    </section>

    <section class="two-box">
      <div class="category">
        <div class="category-title">
          项目地区
        </div>
        <div class="category-detail">
          <div class="detail1">
            <span @click="go('Category','wushu')">美国</span>
            <span>德国</span>
            <span>日本</span>
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
    </section>

    <section class="abroad-map">
      <div class="abroad-map-title">
        项目地图
      </div>
      <div class="abroad-map-box">
        <maps></maps>
      </div>
    </section>

    <section class="abroad-item">
      <div class="abroad-item-title">
        精彩项目
      </div>
      <div class="abroad-item-box1">
        <article class="box1-content" v-for="n in 3">
          <a href="http://www.w3school.com.cn" target="_blank">
            <img class="box1-content-img"  src="./image/lunboimg2.jpg">
          </a>
          <a href="http://www.w3school.com.cn" target="_blank">
            <div class="box1-content-title">XXXXXXXXXXXXXXXXXXXX项目</div>
          </a>
        </article>
      </div>
      <div class="abroad-item-box1" style="margin-top: 0">
        <article class="box1-content" v-for="n in 3">
          <a href="http://www.w3school.com.cn" target="_blank">
            <img class="box1-content-img"  src="./image/lunboimg2.jpg">
          </a>
          <a href="http://www.w3school.com.cn" target="_blank">
            <div class="box1-content-title">XXXXXXXXXXXXXXXXXXXX项目</div>
          </a>
        </article>
      </div>
    </section>

    <div class="hr"></div>

    <footer class="foot">
      <div class="foot-top">&copy 2018体育非遗 协议 合作平台 京ICP证012345号</div>
      <div class="foot-bottom">京公网安备11111111111号</div>
    </footer>
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
    methods: {
      go(name,category){
        this.$router.push({
          name: name,
          query: {category:category}
        })
      }
    },
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
      font-size :35px
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
          cursor :pointer


  .abroad-map
    width :1640px
    height :890px
    margin :132px auto
    margin-bottom :0
    padding-top :1px
    background-image: url(./image/biankuang2.png)
    background-repeat: no-repeat
    background-size: 1640px 890px
    .abroad-map-title
      font-size :30px
      color: #5a3224
      font-family: '隶书'
      margin-top :50px
      margin-left:50px
    .abroad-map-box
      margin :40px auto
      width :1520px
      height :726px



  .abroad-item
    width :1608px
    height :844px
    margin :100px auto
    background-image: url(./image/biankuang3.png)
    background-repeat: no-repeat
    background-size: 1608px 844px
    overflow hidden           //解决子元素margin-top无效的方法  上面是另一种方法
    .abroad-item-title
      margin-top :50px
      margin-left:42px
      font-size :30px
      color: #5a3224
      font-family: '隶书'
    .abroad-item-box1
      width :100%
      height :350px
      margin-top :60px
      display flex
      .box1-content
        width :380px
        height :332px
        margin-left :160px
        &:nth-child(1)
          margin-left :70px
        a
          text-decoration: none
          .box1-content-img
            width :380px
            height :260px
          .box1-content-title
            font-size :22px
            color: #5a3224
            font-family: '隶书'
            text-align center






  .hr
    width: 1800px
    height: 20px
    margin: 38px auto
    background-image: url(./image/fenge2.png)
    background-size: 1800px 20px


  .foot
    margin :70px  auto
    margin-bottom :15px
    width :600px
    height :92px
    font-family: '隶书'
    color: #5a3224
    font-size: 23px
    .foot-bottom
      width :50%
      margin:15px auto

</style>
