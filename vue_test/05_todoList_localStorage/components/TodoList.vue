<template>
  <div>
    <ul class="todo-main">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :changeTodoStatus="changeTodoStatus"
        :removeTodoData="removeTodoData"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  data() {
    return {};
  },
  props: ["todos", "changeTodoStatus", "removeTodoData"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
