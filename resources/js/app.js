import axios from 'axios';
import { createApp } from 'vue';
import Spa from './Spa.vue';
import router from './router';

const app = createApp(Spa);

// Konfiguracja Axios jako globalny plugin
app.config.globalProperties.$axios = axios;

app.use(router);
app.mount('#app');
