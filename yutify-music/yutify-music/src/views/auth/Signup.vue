<template>
  <form @submit.prevent="submitData">
    <h3>Sign Up</h3>
    <input type="text" placeholder="User Name" v-model.trim="userInfor.name" />
    <input type="email" placeholder="Email" v-model.trim="userInfor.email" />
    <input
      type="password"
      placeholder="Password"
      v-model.trim="userInfor.password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isLoading">Sign Up</button>
    <button v-else disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from "../../hooks/firestore/useSignup";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Signup",
  setup() {
    const userInfor = reactive({
      name: "",
      email: "",
      password: "",
    });

    const { error, isLoading, signup } = useSignup();

    const router = useRouter();

    const submitData = async function() {
      const user = await signup(
        userInfor.email,
        userInfor.password,
        userInfor.name
      );

      if (!error.value) {
        console.log("用戶註冊成功:", user);
        router.push({ name: "Home" });
      }

      userInfor.name = "";
      userInfor.email = "";
      userInfor.password = "";
    };

    return {
      userInfor,
      submitData,
      error,
      isLoading,
    };
  },
};
</script>

<style></style>
