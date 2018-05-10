<template>
  <div>
    <baidu-map class="map" center="西安" :zoom="5" :min-zoom="3" :scroll-wheel-zoom="true">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width: 130,height:11}"></bm-city-list>
      <bm-control :offset="sizes">

        <el-select v-model="value" placeholder="所有分类" size="mini" @change="handle" style="width: 100px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item">
          </el-option>
        </el-select>
      </bm-control>

      <bm-marker  v-for="(po,key,index) in points"  :key="key"  :position="{lng:po.lng,lat:po.lat}" :dragging="true" >
      </bm-marker>
    </baidu-map>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        points: [],
        options: [{
          value: '选项1',
          lng:[117.062428,92.189283,114.108656,107.422244,97.782061,121.036244],
          lat:[43.591892,39.773329,22.479338,33.708425,34.762749,30.991434],
          label: '武术类'
        }, {
          value: '选项2',
          lng:[117.062428,92.189283,114.108656,107.422244,112.83105],
          lat:[43.591892,39.773329,22.479338,33.708425,30.816924],
          label: '球类'
        }, {
          value: '选项3',
          lng:[117.062428,92.189283,114.108656,107.422244],
          lat:[43.591892,39.773329,22.479338,33.708425],
          label: '摔跤类'
        }],
        value: '',
        sizes:{
          width: 20,
          height: 10
        }
      }
    },
    methods: {
      handle(value){
          console.log(value.lng[0]);
          const points = [];
          for (var i = 0; i < value.lng.length; i++) {
            const position = {lng: value.lng[i], lat: value.lat[i]};
            points.push(position)
          }
          this.points = points
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .map
    width :1515px
    height :720px


  .el-dropdown-link
    cursor: pointer

  .el-icon-arrow-down
    font-size: 12px



</style>
