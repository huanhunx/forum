<template>
  <div class="main">
    <div class="title">
      {{article.title}}
    </div>
    <div class="info">
      <div>
        {{article.reluserName}}
      </div>
      <div>
        {{article.addtime | date}}
      </div>
      <div>
        <!-- 某分类 -->
      </div>
    </div>
    <div class="line">
      <hr>
    </div>
    <div class="content" v-html="article.content">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      article: {}
    }
  },
  computed: {},
  components: {},
  methods: {
    async getArticle() {
      const res = await this.$api.getArticle(this.id)
      if (res._succ) {
        this.article = res.data.data
        document.title=this.article.title
      } else {
        this.article = {}
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getArticle()
  }
}
</script>

<style scoped lang="less">
.main {
  background-color: #fff;
  box-shadow: 0px 3px 10px #bbb;
  min-height: 1px;
  padding: 20px;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .info {
    display: flex;
    font-size: 14px;
    div {
      margin-right: 10px;
      color: #999;
    }
  }
  .line {
    padding-top: 10px;
    
  }
  .content {
    line-height: 1.67;
    color: #252525;
    font-size: 15px;
  }
}
</style>
