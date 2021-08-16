<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo"></TodoHeader>
        <TodoList
          :todos="todos"
          :changeTodoStatus="changeTodoStatus"
          :removeTodoData="removeTodoData"
        ></TodoList>
        <TodoFooter
          :todos="todos"
          @toggleAllDone="toggleAllDone"
          @clearAllDoneData="clearAllDoneData"
        ></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
//* 一個簡易的產生id套件
import { nanoid } from "nanoid";

import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todo")) || [],
    };
  },
  watch: {
    //! 這邊用簡寫會有個bug，因為我們觀測的是一個陣列內含obj，屬性的重新賦值是監測不到的
    //  can not wrtie this todos(value) {
    //   const todoData = JSON.stringify(value);
    //   localStorage.setItem("todo", todoData);
    // },
    todos: {
      deep: true,
      handler(value) {
        const todoData = JSON.stringify(value);
        localStorage.setItem("todo", todoData);
      },
    },
  },
  methods: {
    addTodo(todo) {
      const todoObj = {
        id: nanoid(),
        do: todo,
        done: false,
      };
      this.todos.unshift(todoObj);
    },
    changeTodoStatus(id) {
      this.todos.forEach((todo) => {
        if (id === todo.id) {
          todo.done = !todo.done;
        }
      });
    },
    removeTodoData(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    clearAllDoneData() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
    toggleAllDone(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
  },
};
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: green;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
