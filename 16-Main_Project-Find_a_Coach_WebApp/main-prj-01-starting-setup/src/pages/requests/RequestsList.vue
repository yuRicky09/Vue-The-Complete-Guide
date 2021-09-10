<template>
  <div>
    <base-dialog :show="!!errorMessage" title="錯誤" @close="handleError">
      <h1>{{ errorMessage }}</h1>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequest && !isLoading">
          <request-item
            v-for="req in requests"
            :key="req.id"
            :email="req.email"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any requset yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import requestItem from '../../components/requests/requestItem.vue';

export default {
  components: { requestItem },
  name: 'RequestList',
  data() {
    return {
      isLoading: false,
      errorMessage: null
    };
  },
  computed: {
    ...mapGetters('request', ['requests', 'hasRequest'])
  },
  methods: {
    async loadRequestsList() {
      try {
        this.errorMessage = null;
        this.isLoading = true;
        await this.$store.dispatch('request/loadRequests');
        //上面dispatch的非同步函數有錯誤時會丟出一個error物件，而這個error物件就能被下方的catch接到。
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.errorMessage = null;
    }
  },
  created() {
    this.loadRequestsList();
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
