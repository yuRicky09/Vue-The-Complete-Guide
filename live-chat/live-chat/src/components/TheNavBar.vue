<template>
  <nav>
    <div>
      <p>Hey there...</p>
      <p class="email">Currently logged in as...</p>
    </div>
    <button @click="logoutUser">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../hooks/useLogout";
import { useRouter } from "vue-router";

export default {
  name: "TheNavBar",
  setup(props) {
    const { error, logout } = useLogout();
    const router = useRouter();
    const logoutUser = async function() {
      await logout();
      console.log("登出成功 將跳回首頁");
      router.replace({ name: "Home" });
    };

    return {
      logoutUser,
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
