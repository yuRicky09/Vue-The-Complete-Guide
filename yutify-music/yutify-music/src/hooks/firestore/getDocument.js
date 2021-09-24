import { ref, watchEffect } from "vue";
import { db } from "../../../firebase/config.js";

const getDocument = function(collection, id) {
  const error = ref(null);
  const document = ref(null);

  const documentRef = db.collection(collection).doc(id);

  const unsubscribe = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "為查詢到此Playlist。";
      }
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return {
    document,
    error,
  };
};

export default getDocument;
