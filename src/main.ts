import App from './App.vue';
import router from './router';
import piniaStore from './store';

import '@/styles/index.less';
import '@/styles/reset.less';

// 支持SVG
import 'virtual:svg-icons-register';
import '@arco-design/web-vue/dist/arco.css';

// unocss
import 'virtual:uno.css';

// DevUI
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';

import { ThemeServiceInit, infinityTheme } from 'devui-theme';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');

//vue3的挂载方式
const app = createApp(App);

app.use(router);
app.use(piniaStore);
app.mount('#app');
