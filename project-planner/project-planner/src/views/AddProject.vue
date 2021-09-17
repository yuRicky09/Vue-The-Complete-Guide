<template>
  <form @submit.prevent="submitProject">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model.trim="title" required />
    <label for="detail">Detail</label>
    <textarea id="detail" v-model.trim="detail"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
import db from "../../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "AddProject",
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    async submitProject() {
      try {
        console.log(this.title, this.detail);
        const newProject = {
          title: this.title,
          detail: this.detail,
          complete: false,
        };
        //* 使用此方法firestore會自動幫這個doc產生id
        const submitedProject = await addDoc(
          collection(db, "projects"),
          newProject
        );

        console.log("新增project完成", submitedProject);

        this.$emit("add-project", {
          ...newProject,
          id: submitedProject.id,
        });

        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
