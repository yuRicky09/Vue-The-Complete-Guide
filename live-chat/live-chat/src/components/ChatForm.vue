<template>
  <div v-if="error">{{ error }}</div>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="submitMessage"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../hooks/getUser";
import useCollection from "../hooks/useCollection";
import { timestamp } from "../../firebase/config.js";

export default {
  name: "ChatForm",
  setup(props) {
    const message = ref("");

    const { error, createNewDocIn } = useCollection();
    const { user } = getUser();

    const submitMessage = function() {
      const newMessage = {
        userName: user.value.displayName,
        context: message.value,
        createdAt: timestamp(),
      };

      console.log(newMessage);

      createNewDocIn("messages", newMessage);

      message.value = "";
    };

    return {
      message,
      submitMessage,
      error,
    };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
