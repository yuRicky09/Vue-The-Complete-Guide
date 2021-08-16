<template>
  <div>
    <div class="todo-footer" v-show="todoTotal">
      <label>
        <input type="checkbox" v-model="allDone" />
      </label>
      <span>
        <span>已完成{{ doneTotal }}</span> / 全部{{ todoTotal }}
      </span>
      <button class="btn btn-danger" @click="clearAllDone">
        清除已完成任务
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos"],
  computed: {
    todoTotal() {
      return this.todos.length;
    },
    doneTotal() {
      // return this.todos.filter((todo) => todo.done).length;
      return this.todos.reduce(
        (acc, todo) => (todo.done ? (acc += 1) : acc),
        0
      );
    },
    // computed屬性也能依照其他計算屬性的值得出想要的計算屬性
    //! 這下面寫法會有個bug，因為這是簡易寫法沒有setter，他的值都是依據他依賴的數據決定的。
    //! 但是因為這是個checkbox，我們對這checkbox綁訂一個布爾值，我們的勾選會造成這個計算屬性的值的改變，所以不能用簡易寫法要配置setter
    // allDone() {
    //   return this.todoTotal === this.doneTotal;
    // },
    allDone: {
      get() {
        return this.todoTotal === this.doneTotal;
      },
      set(value) {
        this.$emit("toggleAllDone", value);
      },
    },
  },
  methods: {
    clearAllDone() {
      if (this.doneTotal === 0) {
        alert("沒有可刪除的事項");
      } else {
        if (confirm("確定要刪除所有已完成事項嗎?")) {
          this.$emit("clearAllDoneData");
        }
      }
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
