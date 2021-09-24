<template>
  <div class="home">
    <p>首頁</p>
    <p v-if="isLoading">Loading...</p>
    <p v-if="!hasPlayList && !isLoading">尚未有音樂清單</p>
    <p v-if="error" class="error">{{ error }}</p>
    <ul v-if="documents && !error">
      <play-list-item
        v-for="doc in documents"
        :key="doc.id"
        :playlist="doc"
      ></play-list-item>
    </ul>
  </div>
</template>

<script>
import getCollection from "../hooks/firestore/getCollection.js";
import { watch, ref } from "vue";
import PlayListItem from "../components/PlayListItem.vue";

export default {
  name: "Home",
  components: { PlayListItem },
  setup() {
    const { documents, error, isLoading } = getCollection("playlist");
    const hasPlayList = ref(false);
    watch(documents, () => {
      if (documents.value === null || documents.value.length === 0) {
        hasPlayList.value = false;
      } else {
        hasPlayList.value = true;
      }
    });

    return {
      documents,
      error,
      isLoading,
      hasPlayList,
    };
  },
};
</script>
