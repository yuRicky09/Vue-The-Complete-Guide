<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>姓名: {{ name }}</h1>
    <h1>年齡: {{ newAge }}</h1>
    <h1>性別: {{ sex }}</h1>
    <button @click="getProp">點我看prop屬性</button>
    <button @click="updateAge">點我增加年齡</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "使用prop屬性接受資料",
      newAge: this.age,
    };
  },
  methods: {
    getProp() {
      console.log(this._props);
    },
    updateAge() {
      this.newAge++;
    },
  },
  // 透過props屬性就能獲取父組件傳進來的資料值，並且Vue會在背後幫我們把這些prop掛在這個組件的實體obj上。
  // 簡易寫法
  props: ["name", "age", "sex"],

  // 複雜寫法，可限制傳進來的值的型別
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   age: {
  //     type: Number,
  //     default: 50,
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
