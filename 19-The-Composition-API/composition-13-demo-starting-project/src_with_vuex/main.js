import { createApp } from 'vue';

import store from './store';

import App from './App.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseSearchBar from './components/UI/BaseSearchBar.vue';

const app = createApp(App);

app.component('base-container', BaseContainer);
app.component('base-search-bar', BaseSearchBar);

app.use(store);

app.mount('#app');
