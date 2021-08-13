<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"></TodoHeader>
        <TodoList :todos="todos"></TodoList>
        <TodoFooter></TodoFooter>
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
      todos: [
        { id: "001", do: "打電腦", done: false },
        { id: "002", do: "寫code", done: false },
        { id: "003", do: "耍廢", done: false },
      ],
    };
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
