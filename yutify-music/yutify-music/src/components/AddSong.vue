<template>
  <div class="add-song">
    <button class="add-song-btn" v-if="!showForm" @click="showForm = !showForm">
      Add Song
    </button>
    <form v-else @submit.prevent="submitSongData">
      <h4>Add New Song</h4>
      <input
        type="text"
        placeholder="Song Title"
        required
        v-model.trim="title"
      />
      <input type="text" placeholder="Artist" required v-model.trim="artist" />
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { nanoid } from "nanoid";
import useDocument from "../hooks/firestore/useDocument";

export default {
  name: "AddSong",
  props: ["playlist"],
  setup(props) {
    const title = ref("");
    const artist = ref("");
    const showForm = ref(false);

    const { updateDoc, error } = useDocument("playlist", props.playlist.id);

    const submitSongData = async function() {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: nanoid(),
      };

      console.log(newSong, props.playlist);

      const res = await updateDoc({
        songs: [...props.playlist.songs, newSong],
      });
      console.log("更新歌完成", res);
      title.value = "";
      artist.value = "";
    };

    return {
      title,
      artist,
      showForm,
      submitSongData,
    };
  },
};
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
.add-song-btn {
  margin-bottom: 20px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>
