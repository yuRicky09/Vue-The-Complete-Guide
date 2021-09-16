<template>
  <base-container>
    <h2>{{ selectedUser }}現在所持有專案</h2>
    <base-search-bar @searching="findMatchProject"></base-search-bar>
    <ul v-if="selectedUser">
      <project-item
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
      >
      </project-item>
      <h3 v-if="projects.length === 0">
        {{ selectedUser }}尚未有任何或符合之專案
      </h3>
    </ul>
    <h2 v-else>尚未選擇想看的用戶的專案</h2>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectItem from './ProjectItem.vue';

export default {
  name: 'ProjectList',
  components: { ProjectItem },
  data() {
    return {
      projects: []
    };
  },
  computed: {
    ...mapGetters(['selectedUser'])
  },
  methods: {
    findMatchProject(enteredValue) {
      const projects = this.$store.getters.selectedUserProjects;
      const matchProject = projects.filter(project => {
        const reg = new RegExp(enteredValue, 'ig');
        return reg.test(project.title);
      });
      this.projects = matchProject;
    }
  },
  watch: {
    //! 當selectedUser一改變就更新為此user的projects
    selectedUser() {
      this.projects = this.$store.getters.selectedUserProjects;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
