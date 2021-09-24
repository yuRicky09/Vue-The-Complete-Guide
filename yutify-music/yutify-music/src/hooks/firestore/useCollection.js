import { ref } from "vue";
import { db } from "../../../firebase/config.js";

const useCollection = function() {
  const error = ref(null);
  const createNewDocIn = async function(collection, newDoc) {
    error.value = null;
    try {
      const res = await db.collection(collection).add(newDoc);
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return {
    error,
    createNewDocIn,
  };
};

export default useCollection;
