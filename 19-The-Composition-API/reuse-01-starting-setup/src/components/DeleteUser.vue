<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert
  },
  //!注意 components option不能reuse在mixin
  //! mixin原則: mixin裡寫的配置會合併到使用的組件，如果同個配置象裡有衝突時，組件會取用自己的而非mixin
  mixins: [alertMixin]
};
</script>
