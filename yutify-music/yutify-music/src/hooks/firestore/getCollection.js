import { ref, watchEffect } from "vue";
import { db } from "../../../firebase/config.js";

const getCollection = function(collection, query) {
  const error = ref(null);

  const documents = ref(null);
  const isLoading = ref(false);
  error.value = null;
  isLoading.value = true;
  let collectionRef = db.collection(collection).orderBy("createdAt");

  //! 如果有query就重新再查找一遍
  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  //! 抓到參照collection後使用onSnapshot監聽這個collection內所有的增刪改
  //! onSnapshot的callback假設在增資料時實際上會執行到兩次(預設下)一次是本地端增加資料時就執行，一次是資料完成增加到backend(server)時又會執行一次
  //! onSnapshot方法會回傳一個fn，可以藉由執行此fn來取消訂閱此collection的增刪改。
  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      const results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      isLoading.value = false;
    },
    (err) => {
      isLoading.value = false;
      console.log(err.message);
      error.value = err.message;
    }
  );

  //! watchEffect可以自動接受一個叫onInvalidate的參數(為一函數)，此函數可以接受一個callback，此callback會在依賴的數據(非同步函數)or 元件被卸載時執行。
  watchEffect((onInvalidate) => {
    //! 我們希望當user logout時(此時會redirect回首頁元件被卸載)，可以取消對collection的監聽，不然每當user登入登出多次時會同時產生多個監聽器監聽此collection浪費效能
    onInvalidate(() => unsubscribe());
  });
  return { error, documents, isLoading };
};

export default getCollection;
