import { createApp } from 'vue';
import Element from 'element-plus';
import App from './App.vue';

import router from './router/index.ts';
import store from './store/index.ts';

import 'element-plus/theme-chalk/index.css';

createApp(App).use(router).use(store).use(Element).mount('#app');
