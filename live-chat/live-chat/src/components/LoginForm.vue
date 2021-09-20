<template>
  <form @submit.prevent="submitData">
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <div class="error">
      <span>{{ error }}</span>
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../hooks/userLogin.js";

export default {
  name: "LoginForm",
  emits: ["login"],
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();
    const submitData = async function() {
      const user = await login(email.value, password.value);
      if (user) {
        context.emit("login");
      }
    };

    return {
      email,
      password,
      submitData,
      error,
    };
  },
};
</script>

<style></style>
