<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="請輸入您的待辦事項，並按下Enter"
      v-model="enteredValue"
      @keyup.enter="getInputValue"
    />
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      enteredValue: "",
    };
  },
  methods: {
    //! 由於目前知識量無法讓同層的組件戶傳資料，我們只好想辦法透過所有組件的共通父層來傳
    getInputValue() {
      if (!this.enteredValue.trim()) {
        alert("輸入值不得為空");
      } else {
        this.$emit("addTodo", this.enteredValue);
        this.enteredValue = "";
      }
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
