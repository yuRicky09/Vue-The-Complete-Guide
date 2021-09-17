<template>
  <div class="home">
    <filter-nav
      @changeFilter="setFilterMode"
      :filterMode="filterMode"
    ></filter-nav>
    <div v-if="isLoading">正在讀取中...</div>
    <div v-if="!isLoading && projects.length">
      <div>
        <div v-for="project in availableProjects" :key="project.id">
          <project-item
            :project="project"
            @deleteProject="deleteProject"
            @updateProjectState="updateProjectState"
          ></project-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../firebase/config.js";
import ProjectItem from "../components/ProjectItem.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  components: { ProjectItem, FilterNav },
  name: "Home",
  data() {
    return {
      projects: [],
      isLoading: false,
      filterMode: "all",
    };
  },
  computed: {
    availableProjects() {
      if (this.filterMode === "all") {
        return this.projects;
      } else if (this.filterMode === "completed") {
        return this.projects.filter((project) => project.complete === true);
      } else if (this.filterMode === "ongoing") {
        return this.projects.filter((project) => project.complete === false);
      }
    },
  },
  methods: {
    async fetchAllProjectFromFireStore() {
      try {
        this.isLoading = true;
        //! 我們引入近來的fireStore db物件內的collection method可以填入我們想要的collection參數，再用get(非同步)method拿到response，要拿到真正想要的資料要繼續往下挖
        const res = await db.collection("projects").get();

        this.isLoading = false;

        //! res的docs property可以拿到一個陣列內含此collection裡所有的document 每個document可以再用id property拿到唯一id值，用data method可以拿到真正包含資料的(obj)
        const newProject = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        this.projects = newProject;
      } catch (err) {
        this.isLoading = false;
        console.log(err.message);
      }
    },
    deleteProject(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    updateProjectState(id) {
      //! 物件傳參 這抓出來的物件指向會跟原本那個一樣，所以修改這抓出來的也會改到原本的
      // const selectedProject = this.projects.find(
      //   (project) => project.id === id
      // );
      // selectedProject.complete = !selectedProject.complete;

      this.projects.forEach((project) => {
        if (project.id === id) {
          project.complete = !project.complete;
        }
      });
    },
    setFilterMode(mode) {
      this.filterMode = mode;
    },
  },
  mounted() {
    this.fetchAllProjectFromFireStore();
  },
};
</script>
