<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">YUTIFY MUSIC</router-link></h1>
      <div class="links">
        <template v-if="user">
          <router-link class="btn" :to="{ name: 'MyPlayList' }"
            >My Playlist</router-link
          >
          <router-link class="btn" :to="{ name: 'CreatePlayList' }"
            >Create Playlist</router-link
          >
          <span>Hi! {{ user.displayName }}</span>
          <button @click="logoutUser">Logout</button>
        </template>
        <template v-else>
          <router-link class="btn" :to="{ name: 'Signup' }"
            >Sign Up</router-link
          >
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </template>
      </div>
      <div v-if="error">{{ error }}</div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../hooks/firestore/useLogout.js";
import getUser from "../hooks/firestore/getUser.js";
import { useRouter } from "vue-router";

export default {
  name: "TheNavBar",
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    const { user } = getUser();

    const logoutUser = async function() {
      await logout();
      router.push({ name: "Home" });
    };

    return {
      logoutUser,
      error,
      user,
    };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  display: flex;
  align-items: center;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>
