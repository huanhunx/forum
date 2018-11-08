<template>
	<div class="">
		<div class="container">
			<el-row :gutter="30">
				<el-col :span="18">
					<articleList></articleList>
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
import articleList from '@/components/forum/articleList'
export default {
  components: {
    articleList
  }
}
</script>
<style scoped=""></style>