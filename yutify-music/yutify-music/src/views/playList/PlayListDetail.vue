<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="deleteError" class="error">{{ deleteError }}</div>
  <div v-if="deleteImgError" class="error">{{ deleteImgError }}</div>
  <div v-if="playlist" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="isCreatedByNowUser && !isLoading" @click="handleDelete">
        點我刪除此Playlist。
      </button>
      <button v-else-if="isCreatedByNowUser && isLoading">刪除中...</button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p v-if="playlist.songs.length === 0">Playlist尚未有任何歌曲</p>
      <p v-else>此Playlist歌曲如下</p>
      <template v-if="playlist.songs.length > 0">
        <div v-for="song in playlist.songs" :key="song.id" class="single-song">
          <div class="details">
            <h3>{{ song.title }}</h3>
            <p>{{ song.artist }}</p>
          </div>
          <button v-if="isCreatedByNowUser" @click="deleteSong(song.id)">
            Delete
          </button>
        </div>
      </template>
      <add-song :playlist="playlist" v-if="isCreatedByNowUser"></add-song>
    </div>
  </div>
</template>

<script>
import AddSong from "../../components/AddSong.vue";
import getDocument from "../../hooks/firestore/getDocument.js";
import useDocument from "../../hooks/firestore/useDocument";
import getUser from "../../hooks/firestore/getUser.js";
import useStorage from "../../hooks/firestore/useStorage.js";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PlayListDetail",
  components: { AddSong },
  props: ["id"],
  setup(props) {
    const { error, document: playlist } = getDocument("playlist", props.id);
    const { error: deleteError, deleteDoc, isLoading, updateDoc } = useDocument(
      "playlist",
      props.id
    );
    const { user } = getUser();
    const router = useRouter();
    const { deleteImage, error: deleteImgError } = useStorage();

    const isCreatedByNowUser = computed(() => {
      return (
        playlist.value && user.value && user.value.uid === playlist.value.userId
      );
    });

    // 刪除整個playlist
    const handleDelete = async function() {
      const res = confirm("確定要刪除嗎?");
      if (res) {
        await deleteImage(playlist.value.uploadPath);
        await deleteDoc();
        if (!deleteError.value && !deleteImgError.value) {
          router.push({ name: "Home" });
        }
      }
    };

    // 刪除點選歌曲
    const deleteSong = async function(deleteSongId) {
      const newSongs = playlist.value.songs.filter(
        (song) => song.id !== deleteSongId
      );
      const res = confirm("確定刪除此歌曲嗎?");
      if (res) {
        await updateDoc({ songs: newSongs });
        console.log("刪除歌曲完成");
      }
    };
    return {
      playlist,
      error,
      isCreatedByNowUser,
      deleteError,
      isLoading,
      handleDelete,
      deleteImgError,
      deleteSong,
    };
  },
};
</script>

<style scoped>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
}
.cover img {
  display: block;
  max-width: 100%;
  background-position: center;
  background-size: cover;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
.single-song {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--secondary);
  margin-bottom: 20px;
}
</style>
