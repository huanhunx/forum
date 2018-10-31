<template>
  <div>
    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <!-- <div class="title"> -->
        <router-link :to="`/forum/page/${item._id}`" tag="span" class="title">
          {{item.title}}
        </router-link>
        <!-- </div> -->
        <div class="info">
          <div class="user">
            {{item.reluserName}}
          </div>
          <div class="date">
            {{item.addtime | date}}
          </div>
        </div>
        <div class="content-prev">
          {{item.prevContent}}
        </div>
        <div class="footer">
          <div class="ctrl">
            <el-button icon="el-icon-caret-top" size="mini" :plain="!item.isLike" type="primary" class="ctrlItem">
              {{item.likes||''}}赞
            </el-button>
          </div>
          <!-- <div class="tags">
            <span class="tag" v-for="(tag,idx) in item.tags">#{{tag.name}}</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {},
  components: {},
  methods: {},
  async mounted() {
    const res = await this.$api.getArticleList()
    if (res._succ) {
      this.list = res.data.data.list
    }
  }
}
</script>

<style scoped lang="less">
.list {
  min-height: 1px;
  box-shadow: 0px 3px 10px #bbb;
  background-color: #fff;
  padding:20px;
  .list-item:first-child {
    padding-top: 0;
  }
  .list-item {
    border-bottom: 1px solid #aaa;
    padding: 15px 0px;
    .title {
      font-size: 18px;
      font-weight: bold;
      line-height: 30px;
      color: #2d8cf0;
      cursor: pointer;
    }
    .title:hover {
      color: #5cadff;
    }
    .content-prev {
      font-size: 14px;
      color: #999;
      line-height: 1.5rem;
      margin-bottom: 10px;
      text-align: justify;
    }
    .info {
      color: #888;
      font-size: 14px;
      display: flex;
      div {
        margin-right: 20px;
      }
      .tags {
        color: #2d8cf0;
        .tag {
          cursor: pointer;
          margin-right: 10px;
        }
        .tag:hover {
          color: #5cadff;
        }
      }
    }
    .footer {
      .ctrl {
        font-size: 14px;
        color: #2d8cf0;
        .ctrlItem {
          // margin-right: px
        }
      }
    }
  }
  .list-item:last-child {
    border: none;
  }
}
</style>
