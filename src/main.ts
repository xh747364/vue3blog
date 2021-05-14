import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';
import './assets/css/font-awesome.min.css';
import { axiosPlugin } from './plugins';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import './assets/css/main.css'
VMdPreview.use(githubTheme);

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(axiosPlugin)
app.use(VMdPreview)
app.mount('#app')
