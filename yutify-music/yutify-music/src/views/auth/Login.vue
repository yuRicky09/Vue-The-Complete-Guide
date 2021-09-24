<template>
  <form @submit.prevent="submitData">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model.trim="email" />
    <input type="password" placeholder="Password" v-model.trim="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isLoading">Login</button>
    <button v-else disabled>Loading</button>
  </form>
</template>

<script>
import useLogin from "../../hooks/firestore/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, isLoading, login } = useLogin();

    const router = useRouter();

    const submitData = async function() {
      const user = await login(email.value, password.value);
      console.log("登入用戶:", user);
      email.value = "";
      password.value = "";

      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    return {
      email,
      password,
      error,
      submitData,
      isLoading,
    };
  },
};
</script>

<style></style>
