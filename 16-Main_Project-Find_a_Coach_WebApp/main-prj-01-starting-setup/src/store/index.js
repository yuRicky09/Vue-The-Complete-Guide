import { createStore } from 'vuex';

import coachModule from './coachModule';
import requestModule from './requestModule';
import authModule from './authModule';

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
    auth: authModule
  }
});

export default store;
