<template>
  <li>
    <h3>{{ userName }}</h3>
    <button
      @click="showUserProject(userId)"
      :class="{ selected: selectedUser === userId }"
    >
      View Project
    </button>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'UserItem',
  props: ['userName', 'userId'],
  computed: {
    ...mapGetters(['selectedUser'])
  },
  methods: {
    ...mapMutations(['changeSelectedUser']),
    showUserProject(userId) {
      this.changeSelectedUser(userId);
    }
  }
};
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>
