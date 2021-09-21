<template>
  <div class="container">
    <the-nav-bar></the-nav-bar>
    <chat-window></chat-window>
    <chat-form></chat-form>
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  name: "ChatRoom",
  components: { TheNavBar, ChatForm, ChatWindow },
};
</script>

<style></style>
