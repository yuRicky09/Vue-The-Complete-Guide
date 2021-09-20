<template>
  <div class="welcome container">
    <p>welcome</p>
    <template v-if="showLogin">
      <h2>Login</h2>
      <login-form @login="enterChatRoom"></login-form>
      <p>
        No account yet? <span @click="showLogin = false">Signup</span> instead.
      </p>
    </template>
    <template v-else>
      <h2>Sign Up</h2>
      <signup-form @signup="enterChatRoom"></signup-form>
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead.
      </p>
    </template>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: { SignupForm, LoginForm },
  setup(props) {
    const showLogin = ref(true);

    const router = useRouter();
    const enterChatRoom = function() {
      router.replace({ name: "ChatRoom" });
    };

    return { showLogin, enterChatRoom };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
