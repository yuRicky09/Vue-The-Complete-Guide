import { storage } from "../../../firebase/config.js";
import { ref } from "vue";
import getUser from "./getUser";

const useStorage = function() {
  const error = ref(null);
  const uploadPath = ref(null);
  const imageDownloadPath = ref(null);

  const { user } = getUser();

  const uploadImage = async function(file) {
    //* 1. 先定義要上傳到storage的路徑位置，並使用storage.ref()傳入上傳位置參數得到一個ref指令物件
    uploadPath.value = `cover/${user.value.uid}/${file.name}`;
    const storageRef = storage.ref(uploadPath.value);

    //* 2.在將要上傳的檔案用put方法串入此指令物件
    try {
      const res = await storageRef.put(file);
      console.log("檔案上傳完畢 res:", res);

      //* 3.可以藉由上傳完得到的response來獲取此檔案的下載地址
      imageDownloadPath.value = await res.ref.getDownloadURL();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  const deleteImage = async function(path) {
    const storageRef = storage.ref(path);
    try {
      await storageRef.delete();
      error.value = null;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return {
    error,
    uploadImage,
    deleteImage,
    imageDownloadPath,
    uploadPath,
  };
};

export default useStorage;
