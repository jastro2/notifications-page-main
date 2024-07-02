import { createApp } from 'vue';

import App from './App.vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// import BootstrapVue3 from 'bootstrap-vue-3';

import PostBoi from './components/PostBoi.vue';

const app = createApp(App);

// app.use(BootstrapVue3);

app.component('post-boi', PostBoi)

app.mount('#app')
