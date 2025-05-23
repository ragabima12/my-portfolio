import './assets/main.css';
import './styles/tailwind.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from './plugins/fontawesome';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
