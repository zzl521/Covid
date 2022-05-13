<template>
<div class="hello">
<div ref="china" :style="{width: '100%', height: '400px'}">asd</div> </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import 'echarts/map/js/china.js'  
import resize from './mixins/resize'

const option={
    title: {
        text: '现有疫情图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['数据图']
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
          { min: 500, max: 999, label: '确诊500-999人', color: '#4e160f' },
          { min: 100, max: 499, label: '确诊100-499人', color: '#974236' },
          { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
          { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' },
        ],
        color: ['#E0022B', '#E09107', '#A3E00B']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '确诊数',
          type: 'map',
          mapType: 'china',
          roam: false,    
          label: {
            show: true,
            color: '#333'
          },
          roam:true,
          zoom:1.2,
      itemStyle:{
        areaColor: '#eee',
        borderColor: 'green'
      },
          data: [ {
              name: '北京',
              value: 502
            }, {
              name: '天津',
              value: 60
            }, {
              name: '上海',
              value: 8720
            }, {
              name: '重庆',
              value: 337
            }, {
              name: '河北',
              value: 126
            }, {
              name: '河南',
              value: 78
            }, {
              name: '云南',
              value: 14
            }, {
              name: '辽宁',
              value: 74
            }, {
              name: '黑龙江',
              value: 144
            }, {
              name: '湖南',
              value: 26
            }, {
              name: '安徽',
              value: 6
            }, {
              name: '山东',
              value: 270
            }, {
              name: '新疆',
              value: 29
            }, {
              name: '江苏',
              value: 23
            }, {
              name: '浙江',
              value: 554
            }, {
              name: '江西',
              value: 476
            }, {
              name: '湖北',
              value: 2
            }, {
              name: '广西',
              value: 17
            }, {
              name: '甘肃',
              value: 0
            }, {
              name: '山西',
              value: 19
            }, {
              name: '内蒙古',
              value: 34
            }, {
              name: '陕西',
              value: 0
            }, {
              name: '吉林',
              value: 505
            }, {
              name: '福建',
              value: 179
            }, {
              name: '贵州',
              value: 56
            }, {
              name: '广东',
              value: 176
            }, {
              name: '青海',
              value: 15
            }, {
              name: '西藏',
              value: 0
            }, {
              name: '四川',
              value: 69
            }, {
              name: '宁夏',
              value: 0
            }, {
              name: '海南',
              value: 79
            }, {
              name: '台湾',
              value: 253931
            }, {
              name: '香港',
              value: 15
            }, {
              name: '澳门',
              value: 9
            }]
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
