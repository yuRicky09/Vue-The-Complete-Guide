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
        <span v-show="!todo.isEdit">{{ todo.do }}</span>
        <!-- blur事件=失去焦點時.... -->
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.do"
          ref="todoInput"
          @blur="updateTodo"
          @keyup.enter="updateTodo"
        />
      </label>
      <button class="btn btn-danger" @click="checkRemoveTodo(todo.id)">
        删除
      </button>
      <button class="btn" @click="editTodo" v-show="!todo.isEdit">
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
    editTodo() {
      //! 後續添加的屬性不能這樣寫，會因為沒有getter,setter造成沒有響應式。
      // this.todo.isEdit = true;
      //! 要使用Vue.set() or vc.$set()
      if (this.todo.isEdit === undefined) {
        // 沒有此屬性才要設此屬性，有的話就改值就好!
        this.$set(this.todo, "isEdit", true);
      } else {
        this.todo.isEdit = true;
      }
      // 按下編輯鈕後獲取焦點
      //! 這邊這樣會有個bug，這是關於數據改變時模板解析的時間點問題。 Vue雖然是當數據發生改變就會重新解析模板一變，但不是說一看到數據變就馬上解析，
      //! 譬如現在這個案例 我們為數據添加or修改isEdit屬性，但Vue去解析模板的時機點是這個回調整個看完才會去解析，不然如果這個回調內還會改多次數據的話這樣會因為大量多次解析效能不好。
      //! 所以Vue的原則是回調跑完後一次去更新模板， 這就會造成下面這行沒效果，因為還沒解析模板讓input框出現(v-show依據isEdit的值)，所以當然就無法獲取焦點。
      //! 這時候我們可以使用Vue提供的一個API nextTick的callback會等DOM更新過後的下一次才會去執行
      this.$nextTick(function() {
        this.$refs.todoInput.focus();
      });
    },
    updateTodo() {
      const newInput = this.$refs.todoInput.value;

      // 驗證更新值
      if (!newInput.trim()) {
        return alert("更新的內容不能為空!");
      } else {
        this.todo.do = newInput;
        this.todo.isEdit = false;
      }
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
