<template>
    <div class="chart" ref='chart'>

    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
  props: ['option'],
  data() {
    return {}
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {
    const baseConfig = {
      grid: {
        top: 10,
        left: 50,
        right: 25,
        bottom: 20
      },
      tooltip: {
           trigger: 'axis',
      }
    }
    const option = Object.assign(baseConfig, this.option)
    echarts.init(this.$refs.chart).setOption(option)
  }
}
</script>

<style scoped lang="less">
.chart {
  width: 100%;
  height: 100%;
}
</style>
