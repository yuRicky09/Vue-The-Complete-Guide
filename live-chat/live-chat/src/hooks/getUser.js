import { auth } from "../../firebase/config.js";
import { ref } from "vue";

//* 如果沒有currentUser回得到null
const user = ref(auth.currentUser);

//! onAuthStateChanged會在當權限改變時觸發callback並給予現在user的資訊當參數(如果是logout時，此資訊為null)
auth.onAuthStateChanged((nowUser) => {
  if (nowUser) {
    console.log("now user is:", nowUser);
    user.value = nowUser;
  }
});

const getUser = function() {
  return {
    user,
  };
};

export default getUser;
