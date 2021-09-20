import { auth } from "../../firebase/config.js";
import { ref } from "vue";

const error = ref(null);

const login = async function(email, password) {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    return res.user;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogin = function() {
  return { error, login };
};

export default useLogin;
