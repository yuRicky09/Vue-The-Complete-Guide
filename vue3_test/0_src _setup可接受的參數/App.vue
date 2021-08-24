<template>
  <div>
    <Demo msg="你好啊" sex="男性" @showAlert="showAlert"></Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    const showAlert = function(value) {
      alert(`我彈出來拉,我收到子組件的參數是${value}`);
    };

    return {
      showAlert,
    };
  },
};
</script>

<style></style>
