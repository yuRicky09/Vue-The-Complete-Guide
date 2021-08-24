<template>
  <div>
    <h1>{{ person.name }}</h1>
    <h1>{{ person.age }}</h1>
    <h2>{{ msg }}</h2>
    <button @click="emitEvent">觸發自定義事件</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  // Vue3一樣能使用props使子組件接受父組件傳來的參數
  props: ["msg", "sex"],
  // Vue3中要觸發那些自定義事件時要先聲明，不然會有警告
  emits: ["showAlert"],
  //* setup參數可接受兩個參數
  setup(props, content) {
    //! setup的props參數需要組件自身先聲明要接受的props才可於setup內使用
    console.log(props);
    const person = reactive({
      name: "Yu",
      age: 16,
    });

    const emitEvent = function() {
      content.emit("showAlert", 666);
    };

    return {
      person,
      emitEvent,
    };
  },
};
</script>

<style></style>
