<template>
	<div class="">
		<div class="container">
			<el-row :gutter="30">
				<el-col :span="width>1140?18:24">
					<articleList></articleList>
				</el-col>
				<el-col :span="6" v-if="this.width>1140">
					<forum-controller></forum-controller>
				</el-col>
			</el-row>
			<!-- <el-button type="primary" round @click="">新文章</el-button> -->
		</div>
	</div>
</template>
<script>
import articleList from '@/components/forum/articleList'
import { mapGetters } from 'vuex'

export default {
  components: {
    articleList
  },
  computed: {
    ...mapGetters('browser', ['width'])
  }
}
</script>
<style scoped=""></style>