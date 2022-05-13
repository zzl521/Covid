<template>
<div class="hello">
<div ref="line" :style="{width: '100%', height: '400px'}">asd</div> </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import 'echarts/map/js/china.js'  
import resize from './mixins/resize'

const option = {
      title: {
        text: '疫情近七日新增趋势',
        left: 'center'
      },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [5646, 1410, 916, 864, 368, 353, 360],
      type: 'line'
    }
  ]
};

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
      this.mychart= echarts.init(this.$refs.line)
      this.mychart.setOption(option);
    }
  }
}
</script>
