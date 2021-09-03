import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import About from './pages/About';
import Home from './pages/Home';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});

// app.mount('#app');
