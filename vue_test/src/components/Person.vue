<template>
  <div>
    <h1>上方組件之合為:{{ sum }}</h1>
    <h1>請輸入要添加人員</h1>
    <input
      type="text"
      placeholder="請輸入姓名"
      v-model="enteredValue"
      @keyup.enter="add(enteredValue)"
    />
    <button @click="add(enteredValue)">新增人員</button>
    <br />
    <h2>已新增人員</h2>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Person",
  data() {
    return {
      enteredValue: "",
    };
  },
  computed: {
    ...mapState("personCollection", ["personList"]),
    ...mapState("countCollection", ["sum"]),
  },
  methods: {
    add(value) {
      this.addPerson(value);
      this.enteredValue = "";
    },
    ...mapActions("personCollection", ["addPerson"]),
  },
};
</script>

<style></style>
