// Style imports
import '../css/main.css';

import { createPinia } from 'pinia';
// App
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');
