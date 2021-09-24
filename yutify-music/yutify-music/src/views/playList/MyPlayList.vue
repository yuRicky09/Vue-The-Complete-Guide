<template>
  <div>My Playlist</div>
  <template v-if="documents && !isLoading">
    <play-list-item
      v-for="playlist in documents"
      :key="playlist.id"
      :playlist="playlist"
    ></play-list-item>
  </template>
  <p v-if="!isLoading && documents.length === 0">尚未有Playlist</p>
  <router-link :to="{ name: 'CreatePlayList' }" class="btn"
    >建立Playlist</router-link
  >
</template>

<script>
import getCollection from "../../hooks/firestore/getCollection.js";
import getUser from "../../hooks/firestore/getUser.js";
import PlayListItem from "../../components/PlayListItem.vue";

export default {
  name: "MyPlayList",
  components: { PlayListItem },
  setup(props) {
    const { user } = getUser();
    const { documents, isLoading } = getCollection("playlist", [
      "userId",
      "==",
      user.value.uid,
    ]);

    return {
      documents,
      isLoading,
    };
  },
};
</script>

<style></style>
