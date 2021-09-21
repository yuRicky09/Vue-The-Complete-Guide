<template>
  <nav v-if="user">
    <div>
      <p>用戶:{{ user.displayName }}</p>
      <p class="email">帳戶信箱:{{ user.email }}</p>
    </div>
    <button @click="logoutUser">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../hooks/useLogout";
import { useRouter } from "vue-router";
import getUser from "../hooks/getUser.js";

export default {
  name: "TheNavBar",
  setup(props) {
    const { error, logout } = useLogout();
    const router = useRouter();

    const { user } = getUser();

    const logoutUser = async function() {
      await logout();
      console.log("登出成功 將跳回首頁");
      router.replace({ name: "Home" });
    };

    return {
      logoutUser,
      user,
    };
  },
};
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
