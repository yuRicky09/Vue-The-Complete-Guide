<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you serach"
        v-model="searchValue"
      />&nbsp;<button @click="searchUserInfo">Search</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    searchUserInfo() {
      axios
        .get(`https://api.github.com/search/users?q=${this.searchValue}`)
        .then(
          (res) => {
            // console.log("收到請求了", res.data);
            this.$bus.$emit("getUserInfo", res.data.items);
          },
          (error) => {
            console.log("請求失敗", error.message);
          }
        );
    },
  },
};
</script>

<style></style>
