import { auth } from "../../../firebase/config.js";
import { ref } from "vue";

const error = ref(null);
const isLoading = ref(false);

const login = async function(email, password) {
  try {
    error.value = null;
    isLoading.value = true;

    const res = await auth.signInWithEmailAndPassword(email, password);

    isLoading.value = false;
    return res.user;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isLoading.value = false;
  }
};

const useLogin = function() {
  return { error, login, isLoading };
};

export default useLogin;
