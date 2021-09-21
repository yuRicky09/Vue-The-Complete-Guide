<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formatedDocuments" class="messages" ref="messageWindow">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.userName }}</span>
        <span class="message">{{ doc.context }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../hooks/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, onUpdated } from "vue";

export default {
  name: "ChatWindow",
  setup(props) {
    const { error, documents } = getCollection("messages");
    const messageWindow = ref(null);
    const formatedDocuments = computed(() => {
      //! timestamp方法會回傳一個時間戳物件 可以使用roDate()轉成UTC時間，可在使用第三方套件改格式
      if (documents.value) {
        const newDocs = documents.value.map((doc) => {
          const newDoc = {
            ...doc,
            createdAt: formatDistanceToNow(doc.createdAt.toDate()),
          };
          return newDoc;
        });

        return newDocs;
      }
    });

    onUpdated(() => {
      messageWindow.value.scrollTop =
        messageWindow.value.scrollHeight - messageWindow.value.clientHeight;
    });

    return {
      error,
      formatedDocuments,
      messageWindow,
    };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
