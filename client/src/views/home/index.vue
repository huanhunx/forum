<template>
  <div>
    <div class="container">
      <el-row :gutter="30">
        <el-col :span="12" v-for="(item,index) in chartList" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{item.title}}</span>
            </div>
            <chart class="chart" :option="item.option"></chart>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import chart from '@/components/chart'

export default {
  data() {
    return {
      chartList: [
        {
          title: '文章数量',
          option: {
            xAxis: {
              type: 'category',
              data: [
                '10-31',
                '11-01',
                '11-02',
                '11-03',
                '11-04',
                '11-05',
                '11-06',
                '11-07'
              ]
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                type: 'line',
                data: [10, 5, 3, 4, 5, 2, 7, 15],
                name: '发帖数量'
              }
            ]
          }
        }
      ]
    }
  },
  computed: {},
  components: {
    chart
  },
  methods: {
    getArticleStatic() {
      this.$api.getArticleStatic()
    }
  },
  mounted() {
    this.getArticleStatic()
  }
}
</script>

<style scoped lang="less">
.chart {
  width: 100%;
  height: 200px;
}
</style>
