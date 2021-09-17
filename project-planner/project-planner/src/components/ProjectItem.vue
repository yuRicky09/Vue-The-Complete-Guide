<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="action">
      <h3 @click="toggleShowDetail">{{ project.title }}</h3>
      <div class="icons">
        <span
          class="material-icons"
          :class="{ checked: project.complete }"
          @click="updateProjectState(project.id)"
        >
          done
        </span>
        <router-link :to="`/projects/${project.id}`">
          <span class="material-icons">
            edit
          </span>
        </router-link>
        <span class="material-icons" @click="deleteProject(project.id)">
          delete
        </span>
      </div>
    </div>
    <div class="detail" v-if="showDetail">
      <p>{{ project.detail }}</p>
    </div>
  </div>
</template>

<script>
import db from "../../firebase/config.js";
import { doc, updateDoc } from "firebase/firestore";

export default {
  name: "ProjectItem",
  props: ["project"],
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    toggleShowDetail() {
      this.showDetail = !this.showDetail;
    },
    async deleteProject(id) {
      const res = confirm("確定要刪除嗎?");
      if (res) {
        await db
          .collection("projects")
          .doc(id)
          .delete();

        this.$emit("delete-project", id);
      }
    },
    async updateProjectState(id) {
      //!從 foirestore引入 doc, updateDoc methods。 用doc來抓想更新的doc，再用updateDoc給予更新資訊
      const selectedProject = doc(db, "projects", id);
      await updateDoc(selectedProject, {
        complete: !this.project.complete,
      });

      this.$emit("update-project-state", id);
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid red;
}

.project.complete {
  border-left: 4px solid #00ce89;
}

h3 {
  cursor: pointer;
}

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  margin-left: 10px;
  font-size: 24px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.material-icons.checked {
  color: #00ce89;
}
</style>
