<template>
  <button @click="login" v-if="!isLogin">Login</button>
  <button @click="logout" v-if="isLogin">Logout</button>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'UserAuth',
  methods: {
    ...mapMutations('userAuthModule', ['login', 'logout'])
  },
  computed: {
    ...mapState('userAuthModule', ['isLogin'])
  }
};
</script>

<style></style>
