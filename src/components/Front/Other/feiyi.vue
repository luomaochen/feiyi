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
          <div class="detail-first">
            <div class="eachcategory-box" @click="go('Category','wushu')">
              <img class="eachcategory-img" src="./image/wushu.png">
              <div class="eachcategory-title">武术类</div>
            </div>
            <div class="eachcategory-box" @click="go('Search','wushu')">
              <img class="eachcategory-img" src="./image/qiu.png">
              <div class="eachcategory-title">球类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/shuaijiao.png">
              <div class="eachcategory-title">摔跤类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/jingdu.png">
              <div class="eachcategory-title">竞渡类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/youxi.png">
              <div class="eachcategory-title">游戏类</div>
            </div>
          </div>
          <div class="detail-second">
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/wulong.png">
              <div class="eachcategory-title"> 舞龙类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/wushi.png">
              <div class="eachcategory-title">舞狮类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/jianwu.png">
              <div class="eachcategory-title">健舞类</div>
            </div>
            <div class="eachcategory-box" >
              <img class="eachcategory-img" src="./image/saihui.png">
              <div class="eachcategory-title">赛会类</div>
            </div>
          </div>
        </div>
     </div>
    <div class="area">
      <div class="area-title">
        项目地区
      </div>
      <div class="area-detai-box">
        <div class="eacharea-box" @click="go('Area','guangdong')" v-for="area in areas">
          <span class="eacharea" >{{area.name}}</span>
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

  <section class="feiyi-item">
    <div class="feiyi-item-title">
      精彩项目
    </div>
    <div class="feiyi-item-box1">
      <article class="box1-content" v-for="n in 3">
        <a href="http://www.w3school.com.cn" target="_blank">
          <img class="box1-content-img"  src="./image/lunboimg2.jpg">
        </a>
        <a href="http://www.w3school.com.cn" target="_blank">
          <div class="box1-content-title">XXXXXXXXXXXXXXXXXXXX项目</div>
        </a>
      </article>
    </div>
    <div class="feiyi-item-box1" style="margin-top: 0">
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
                id: '',
                areas:[
                  {id:1, name:'北京'},
                  {id:2, name:'天津'},
                  {id:3, name:'河北'},
                  {id:4, name:'山西'},
                  {id:5, name:'内蒙古'},
                  {id:6, name:'辽宁'},
                  {id:7, name:'吉林'},
                  {id:8, name:'黑龙江'},
                  {id:9, name:'上海'},
                  {id:10, name:'江苏'},
                  {id:11, name:'浙江'},
                  {id:12, name:'江西'},
                  {id:13, name:'安徽'},
                  {id:14, name:'福建'},
                  {id:15, name:'山东'},
                  {id:16, name:'河南'},
                  {id:17, name:'湖北'},
                  {id:18, name:'湖南'},
                  {id:19, name:'广东'},
                  {id:20, name:'广西'},
                  {id:21, name:'海南'},
                  {id:22, name:'重庆'},
                  {id:23, name:'四川'},
                  {id:24, name:'贵州'},
                  {id:25, name:'云南'},
                  {id:26, name:'西藏'},
                  {id:27, name:'陕西'},
                  {id:28, name:'甘肃'},
                  {id:29, name:'青海'},
                  {id:30, name:'宁夏'},
                  {id:31, name:'新疆'},
                  {id:32, name:'香港'},
                  {id:33, name:'澳门'},
                  {id:34, name:'台湾'}
                ]
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
          Maps,
          Foots
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
    height :420px
    margin :60px auto
    display flex
    .category
      width :700px
      height :420px
      background-image: url(./image/biankuang7.png)
      background-repeat: no-repeat
      background-size: 700px 420px
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
        margin: auto
        width :90%
        height :85%
        color: #5a3224
        font-family: '隶书'
        font-size :30px
        .detail-first
          height :50%
          width :100%
          margin-top :15px
          display :flex
          .eachcategory-box
            width :19%
            height :100%
            margin-left :10px
            cursor :pointer
            .eachcategory-img
              width :100px
              height :100px
              margin :auto
              display:block
            .eachcategory-title
              font-size :25px
              margin :auto
              text-align :center
        .detail-second
          height :50%
          width :100%
          margin-top :-10px
          display :flex
          .eachcategory-box
            width :18.2%
            height :100%
            cursor :pointer
            margin-left :10px
            .eachcategory-img
              width :100px
              height :100px
              margin :auto
              display:block
            .eachcategory-title
              font-size :25px
              margin :auto
              text-align :center
    .area
      width :700px
      height :420px
      background-image: url(./image/biankuang7.png)
      background-repeat: no-repeat
      background-size: 700px 420px
      padding-top :1px
      margin-left :200px
      .area-title
        color: #5a3224
        font-family: '隶书'
        font-size :30px
        height :40px
        width :160px
        margin-top :30px
        margin-left :40px
      .area-detai-box
        width :88%
        height :65%
        margin :auto
        display flex
        flex-wrap:wrap
        flex-direction: row
        .eacharea-box
          width :100px
          height :25px
          margin :10px
          text-align center
          cursor :pointer
          .eacharea
            font-size :24px
            color: #5a3224
            font-family: '隶书'




  .feiyi-map
    width :1640px
    height :890px
    margin :132px auto
    margin-bottom :0
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



  .feiyi-item
    width :1608px
    height :844px
    margin :100px auto
    background-image: url(./image/biankuang3.png)
    background-repeat: no-repeat
    background-size: 1608px 844px
    overflow hidden           //解决子元素margin-top无效的方法  上面是另一种方法
    .feiyi-item-title
      margin-top :50px
      margin-left:42px
      font-size :30px
      color: #5a3224
      font-family: '隶书'
    .feiyi-item-box1
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



</style>
