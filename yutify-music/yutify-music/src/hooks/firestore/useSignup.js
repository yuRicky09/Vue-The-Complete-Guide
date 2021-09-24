import { auth } from "../../../firebase/config.js";
import { ref } from "vue";

const error = ref(null);
const isLoading = ref(false);

const signup = async function(email, password, userName) {
  try {
    isLoading.value = true;
    error.value = null;
    const res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res);

    isLoading.value = false;
    //* 正常情況下當創建用戶失敗時firebase會直接丟出error不用自己在new個error物件出來，這邊是防止其他意外
    if (!res) {
      console.log("沒有收到res");
      throw new Error("創建用戶失敗");
    }

    //! res.user內就會有很多關於這個新創的使用者的資訊 如uid, password, email, displayName等等
    //! 我們可以再創建完使用者後使用updateProfile方法更新user物件內的props
    await res.user.updateProfile({
      displayName: userName,
    });
    return res.user;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isLoading.value = false;
  }
};

const useSignup = function() {
  return { error, signup, isLoading };
};

export default useSignup;
