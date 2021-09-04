import { createStore } from 'vuex';
import counterModule from './counterModule';
import userAuthModule from './userAuthModule';

const store = createStore({
  modules: {
    counterModule,
    userAuthModule
  }
});

export default store;
