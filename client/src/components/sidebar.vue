<template>
    <el-aside width="200px" v-if="sidebarShow">Aside</el-aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('sidebar', {
            'sidebarShow':'show'
        })
    }
};
</script>
<style></style>