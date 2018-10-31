import elementUI from './modules/elementUI'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'

export default {
    install: Vue => {
        Vue.use(elementUI)
        Vue.use(VueQuillEditor)
    }
}