import { createApp } from 'vue';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import PostBoi from './components/PostBoi.vue';

const app = createApp(App);

// app.use(BootstrapVue3);

app.component('post-boi', PostBoi)

app.mount('#app')
