<template>
  <div>
    
  </div>
</template>

<script>
import chart from '@/components/chart'

export default {
  data() {
    return {
      articleStatic: [],
      chartList: []
    }
  },
  computed: {},
  components: {
    chart
  },
  methods: {
    async getArticleStatic() {
      const res = await this.$api.getArticleStatic()
      if (!res._succ) {
        return
      }
      const data = res.data.data
      this.articleStatic = data
      this.makeOpt()
    },
    makeOpt() {
      const articleChart = {
        title: '文章数量',
        option: {
          xAxis: {
            type: 'category',
            data: this.articleStatic.map(item => {
              return item.date
            })
          },
          yAxis: {
            type: 'value',
            interval: 1,
            min: 0
          },
          series: [
            {
              type: 'line',
              data: this.articleStatic.map(item => {
                return item.article
              }),
              name: '发帖数量'
            }
          ]
        }
      }
      this.chartList = [articleChart]
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

.container{
  padding-bottom: 10px
}
</style>
