<template>
  <base-container title="Vuex" v-if="isLogin">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <favorite-counter></favorite-counter>
  </base-container>
  <base-container title="UserAuth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapState } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
    UserAuth
  },
  computed: {
    ...mapState('userAuthModule', ['isLogin'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
