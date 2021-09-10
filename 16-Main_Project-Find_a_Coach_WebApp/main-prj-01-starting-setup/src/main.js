import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';

import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BaseSpinner from './components/UI/BaseSpinner';
// import BaseDialog from './components/UI/BaseDialog';

//! 為了優化整個APP，我們不希望用戶一開始就要下載全部資源，而是等到當需要時再載入即可，這時候就能夠過定義非同步組件來達成，用法如下。
const BaseDialog = defineAsyncComponent(() =>
  import('./components/UI/BaseDialog')
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
