<template>
  <form @submit.prevent="submitProject">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model.trim="title" required />
    <label for="detail">Detail</label>
    <textarea id="detail" v-model.trim="detail"></textarea>
    <button @click="updateProject(id)">Update Project</button>
  </form>
</template>

<script>
import db from "../../firebase/config.js";
import { doc, updateDoc } from "firebase/firestore";

export default {
  name: "EditProject",
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    async fetchselectedProject(id) {
      try {
        const res = await db
          .collection("projects")
          .doc(id)
          .get();

        const selectedProject = res.data();
        this.title = selectedProject.title;
        this.detail = selectedProject.detail;
      } catch (err) {
        console.log(err.message);
      }
    },
    async updateProject(id) {
      try {
        const selectedProject = doc(db, "projects", id);
        await updateDoc(selectedProject, {
          title: this.title,
          detail: this.detail,
          complete: false,
        });

        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mounted() {
    this.fetchselectedProject(this.id);
  },
};
</script>

<style></style>
