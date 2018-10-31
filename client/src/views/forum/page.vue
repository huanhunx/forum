<template>
    <div class="mgt10">
        <div class="container">
            <el-row :gutter="30">
                <el-col :span="18">
                    <article-main></article-main>
                </el-col>
                <el-col :span="6">
                    <forum-controller></forum-controller>
                </el-col>
            </el-row>
            <!-- <el-button type="primary" round @click="">新文章</el-button> -->
        </div>
    </div>
</template>

<script>
import articleMain from '@/components/forum/articleMain'
export default {
  data() {
    return {}
  },
  computed: {},
  components: {
    'article-main': articleMain
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="less">
</style>
