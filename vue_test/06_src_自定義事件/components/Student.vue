<template>
  <div class="student">
    <h1>姓名: {{ name }}</h1>
    <h1>年齡: {{ age }}</h1>
    <h1>性別: {{ sex }}</h1>
    <br />
    <button @click="sendStudentName">點我傳送學生名</button>
    <button @click="deleteEvent">點我銷毀傳送學生名功能</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Yu",
      age: 18,
      sex: "男性",
    };
  },
  methods: {
    sendStudentName() {
      //! emit有發射之意，這邊暗指觸發。 $emit(要觸發的事件, 要傳給此事件的callback的參數)
      this.$emit("passData", this.name);
    },
    deleteEvent() {
      // 銷毀指定的自定義事件
      this.$off("passData");
      // 銷毀多個指定的自定義事件
      this.$off(["passData", "passData2"]);
      // 銷毀全部自定義事件
      this.$off();
    },
  },
};
</script>

<style lang="scss" scoped>
.student {
  background-color: darkcyan;
}
</style>
