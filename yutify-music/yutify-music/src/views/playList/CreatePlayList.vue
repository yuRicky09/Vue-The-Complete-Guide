<template>
  <div>
    <form @submit.prevent="submitData">
      <h4>Create a New Playlist</h4>
      <input
        type="text"
        required
        placeholder="Playlist title"
        v-model.trim="title"
      />
      <textarea
        required
        placeholder="Playlist description..."
        v-model.trim.lazy="desc"
      ></textarea>
      <!-- upload playlist image -->
      <label>Upload Playlist Cover Image</label>
      <input type="file" @change="handleFileChange" />
      <div class="error">{{ uploadError }}</div>
      <div class="error">{{ error }}</div>
      <div class="error">{{ fileTypeError }}</div>
      <button v-if="!isLoading">Create</button>
      <button v-else disabled>Loading...</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useStorage from "../../hooks/firestore/useStorage.js";
import useCollection from "../../hooks/firestore/useCollection.js";
import getUser from "../../hooks/firestore/getUser.js";
import { timestamp } from "../../../firebase/config.js";
import { useRouter } from "vue-router";

export default {
  name: "CreatePlayList",
  setup() {
    const title = ref("");
    const desc = ref("");
    const file = ref(null);
    const allowType = ["image/jpg", "image/gif", "image/jpeg"];
    const fileTypeError = ref(null);
    const isLoading = ref(false);

    const router = useRouter();

    const {
      uploadImage,
      imageDownloadPath,
      uploadPath,
      error: uploadError,
    } = useStorage();
    const { createNewDocIn, error } = useCollection();
    const { user } = getUser();

    const submitData = async function() {
      if (file.value) {
        isLoading.value = true;
        await uploadImage(file.value);
        console.log(
          "檔案上傳成功，此檔案的下載地址為:",
          imageDownloadPath.value
        );
        const res = await createNewDocIn("playlist", {
          title: title.value,
          description: desc.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: imageDownloadPath.value,
          uploadPath: uploadPath.value,
          songs: [],
          createdAt: timestamp(),
        });

        console.log("檔案存於firestore成功");
        isLoading.value = false;
        router.push({ name: "PlayListDetail", params: { id: res.id } });
      }
    };

    //! 型別為file的input欄可以使用change事件與e.target.files(為一陣列)配合來抓取用戶選擇的檔案。
    const handleFileChange = function(e) {
      const selectedFile = e.target.files[0];
      //* 如果未選擇則返回值為null
      if (selectedFile && allowType.includes(selectedFile.type)) {
        file.value = selectedFile;
        fileTypeError.value = null;
      } else {
        file.value = null;
        fileTypeError.value = "請確實選擇jpg gif jpeg圖檔。";
      }
    };

    return {
      title,
      desc,
      submitData,
      handleFileChange,
      fileTypeError,
      uploadError,
      error,
      isLoading,
    };
  },
};
</script>

<style scoped>
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
