<template>
  <form @submit.prevent="submitData">
    <input type="text" placeholder="User Name" required v-model="name" />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <div class="error">
      <span>{{ error }}</span>
    </div>
    <button>Sing Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../hooks/useSignup.js";

export default {
  name: "SignupForm",
  emits: ["signup"],
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const submitData = async function() {
      const user = await signup(email.value, password.value, name.value);
      if (user) {
        context.emit("signup");
      }
    };

    return {
      name,
      email,
      password,
      submitData,
      error,
    };
  },
};
</script>

<style></style>
