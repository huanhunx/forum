<template>
  <div class="controller">
    <ul class="ctrlList">
      <router-link tag='li' to='/forum/new'>新文章</router-link>
      <!-- <li>新文章</li> -->
      <!-- <li>文章管理</li> -->
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.controller {
  padding-right: 20px;
}

.ctrlList {
  background-color: #fff;
  box-shadow: 0px 3px 10px #bbb;
  list-style: none;
  padding: 10px 0;
  margin-top: 0;
}

.ctrlList li {
  height: 45px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  transition: background-color 0.3s;
}

.ctrlList li:hover {
  background-color: #ddd;
}
</style>