<template>
  <div class="row">
    <!-- 初始頁面 -->
    <h1 v-show="searchState.init">歡迎使用搜尋Github帳戶網站</h1>
    <!-- 搜尋中 -->
    <h1 v-show="searchState.isSeraching">搜尋中....</h1>
    <div
      class="card"
      v-show="searchState.users.length"
      v-for="user in searchState.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-test">{{ user.login }}</p>
    </div>
    <!-- 搜尋錯誤 -->
    <h1 v-show="searchState.errorMessage">
      搜尋錯誤，請再嘗試搜尋一次{{ searchState.errorMessage }}
    </h1>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      searchState: {
        init: true,
        isSeraching: false,
        errorMessage: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getUserInfo", (state) => {
      //! es6 ...寫法，把obj內的屬性全散開，有重複的後面就蓋前面的值 好用。
      this.searchState = { ...this.searchState, ...state };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>
