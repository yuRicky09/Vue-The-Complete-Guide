<template>
  <div>
    <h1>{{ person }}</h1>
    <h1>姓名: {{ name }}</h1>
    <h1>年齡: {{ age }}</h1>
    <h1>薪資: {{ job.salary }}K</h1>
    <button @click="name += '~'">點我改姓名</button>
    <button @click="age++">點我改年齡</button>
    <button @click="job.salary++">點我加薪</button>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
export default {
  name: "App",

  setup() {
    let person = reactive({
      name: "Yu",
      age: 18,
      job: {
        salary: 20,
      },
    });

    console.log(toRefs(person));

    return {
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
