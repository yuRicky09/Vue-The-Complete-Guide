<template>
  <div>
    <ul class="todo-main">
      <transition-group name="todo-transition" appear>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
      </transition-group>
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
  props: ["todos"],
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

.todo-transition-enter-active {
  animation: titleAnimation 0.5s linear;
}

.todo-transition-leave-active {
  animation: titleAnimation 0.5s linear reverse;
}

@keyframes titleAnimation {
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
