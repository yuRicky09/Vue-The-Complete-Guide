import { createApp } from 'vue';

import App from './App.vue';

import mountedMixin from './mixins/mounted';

const app = createApp(App);

app.mixin(mountedMixin);

app.mount('#app');
