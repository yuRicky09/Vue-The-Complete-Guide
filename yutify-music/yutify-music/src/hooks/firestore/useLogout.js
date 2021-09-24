import { auth } from "../../../firebase/config.js";
import { ref } from "vue";

const error = ref(null);

const logout = async function() {
  try {
    error.value = null;
    await auth.signOut();
    console.log("用戶已登出");
  } catch (err) {
    error.value = err.message;
  }
};

const useLogout = function() {
  return { error, logout };
};

export default useLogout;
