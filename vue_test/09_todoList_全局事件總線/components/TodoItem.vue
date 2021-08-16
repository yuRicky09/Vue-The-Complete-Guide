<template>
  <div>
    <li>
      <label>
        <!-- Vue的數據更改原則 1.數據源在哪就在哪改數據  2.接續一，如果數據是別人傳進來的真要改請改複製的-->
        <!-- 3.如果直接改props傳來的數據Vue會警告，但因為這個警告只是淺層的監測，如果是物件的屬性重新賦值這種她監測不到(因為址沒變)。-->
        <input
          type="checkbox"
          :checked="todo.done"
          @change="checkTodoStatus(todo.id)"
        />
        <!-- 還有一種寫法 對checkbox直接用v-model並綁訂一個布爾值， 這個布爾值就會決定check的狀態。 -->
        <!-- 但這邊用這方法會違背Vue的不要直接更改props的原則，因為v-model為雙向綁定 會更改資料 -->
        <!-- <input type="checkbox" v-model="todo.done"> -->
        <span>{{ todo.do }}</span>
        <input type="text" />
      </label>
      <button class="btn btn-danger" @click="checkRemoveTodo(todo.id)">
        删除
      </button>
      <button>
        编辑
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    checkTodoStatus(id) {
      // this.changeTodoStatus(id);
      this.$bus.$emit("changeTodoStatus", id);
    },
    checkRemoveTodo(id) {
      // if (confirm("確定要刪除嗎?")) this.removeTodoData(id);
      if (confirm("確定要刪除嗎?")) this.$bus.$emit("removeTodoData", id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
.todo-enter-active {
  animation: todo 0.5s linear;
}
.todo-leave-active {
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
