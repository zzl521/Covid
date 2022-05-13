








<template>
<!-- // 疫情新增情况 -->

   <div class="hello">
<div ref="china" :style="{width: '100%', height: '450px'}"></div>

 </div>

</template>





<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import 'echarts/map/js/china.js'  
import resize from '../mixins/resize'

const option={
   
   backgroundColor: '#fff',//修改背景颜色
   title: {
    text: '打卡数据状态分布',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '人数',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '在校' },
        { value: 735, name: '居家' },
        { value: 580, name: '隔离14天' },
        { value: 484, name: '医院' },
        { value: 300, name: '封城' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
       
}

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },

  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.mychart= echarts.init(this.$refs.china)
      this.mychart.setOption(option);
    }
  }
}
</script>
