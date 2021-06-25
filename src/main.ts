import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css'
import { axiosPlugin } from './plugins';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import '@kangc/v-md-editor/lib/style/preview.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
VMdPreview.use(vuepressTheme);

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(axiosPlugin)
app.use(VMdPreview)
app.mount('#app')
