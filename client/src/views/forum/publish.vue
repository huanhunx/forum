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
export default {
    data() {
        return {
            content: '',
            title: '',
            editorOption: {
                theme: 'snow',
                boundary: document.body,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        // [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        // [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                },
                placeholder: '请在这里输入...',
                readOnly: false
            }
        }
    },
    methods: {
        publish() {
            const senddata = {
                title: this.title,
                content: this.content
            }
            this.$api.publish(senddata)
                .then(res => {
                    console.log(res)
                })
        }
    }
};
</script>
<style scoped="">
/* /deep/ .ql-editor{
	height: 400px
} */
</style>