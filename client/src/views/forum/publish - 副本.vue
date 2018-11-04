<template>
  <div>
    <div class="container">
      <el-input class="mgb20" v-model="title" placeholder="请输入标题"></el-input>
      <quill-editor class="mgb20" ref="myTextEditor" v-model="content" :options="editorOption">
      </quill-editor>
      <div class="text-right">
        <el-button type="primary" @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  data() {
    return {
      content: '',
      title: '',
      editorOption: {
        theme: 'snow',
        boundary: document.body,
        modules: {
          ImageExtend: {
            name: 'img', // 图片参数名
            size: 3, // 可选参数 图片大小，单位为M，1M = 1024kb
            action: this.$baseUrl + this.$url.v1.post.uploadImg, // 服务器地址, 如果action为空，则采用base64插入图片
            response: res => {
              return this.$baseUrl + res.data
            },
            headers: xhr => {
              xhr.withCredentials = true
            }
          },
          toolbar: {
            // 如果不上传图片到服务器，此处不必配置
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'image', 'video']
            ], // container为工具栏，此次引入了全部工具栏，也可自行配置
            handlers: {
              image: function() {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        },
        placeholder: '请在这里输入...',
        readOnly: false
      }
    }
  },
  methods: {
    async publish() {
      const senddata = {
        title: this.title,
        content: this.content
      }
      const res = await this.$api.publish(senddata)
      if (res._succ) {
        const id = res.data.data.id
        this.$router.push('/forum/page/' + id)
      }
    }
  },
  created() {}
}
</script>
<style scoped="">
/* /deep/ .ql-editor{
	height: 400px
} */
</style>