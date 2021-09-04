import { createStore } from 'vuex';

import productModule from './productModule';
import cartModule from './cartModule';

const store = createStore({
  modules: {
    productModule,
    cartModule
  }
});

export default store;
