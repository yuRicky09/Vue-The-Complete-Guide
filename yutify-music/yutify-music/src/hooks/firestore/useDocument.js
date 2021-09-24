import { ref } from "vue";
import { db } from "../../../firebase/config.js";

const useDocument = function(collection, id) {
  const error = ref(null);
  const isLoading = ref(false);

  const docRef = db.collection(collection).doc(id);

  const deleteDoc = async function() {
    try {
      isLoading.value = true;
      const res = await docRef.delete();
      error.value = null;
      isLoading.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isLoading.value = false;
    }
  };

  const updateDoc = async function(updateData) {
    try {
      isLoading.value = true;
      const res = await docRef.update(updateData);
      isLoading.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = false;
      isLoading.value = false;
    }
  };

  return {
    error,
    docRef,
    isLoading,
    deleteDoc,
    updateDoc,
  };
};

export default useDocument;
