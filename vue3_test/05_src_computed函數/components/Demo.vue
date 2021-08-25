<template>
  <div>
    <h1>姓:<input type="text" v-model="person.firstName" /></h1>
    <h1>名:<input type="text" v-model="person.lastName" /></h1>
    <h1>全名:<input type="text" v-model="person.fullName" /></h1>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    const person = reactive({
      firstName: "LeBron",
      lastName: "James",
    });

    // const fullName = computed(() => {
    //   return `${person.firstName} - ${person.lastName}`;
    // });
    //! 透過reactive的幫忙，直接對數據添加屬性也一樣能達成響應式
    // 簡化寫法
    person.fullName = computed(() => {
      return `${person.firstName} - ${person.lastName}`;
    });

    // 完整寫法 不只能讀也能改
    person.fullName = computed({
      get() {
        return `${person.firstName} - ${person.lastName}`;
      },

      set(value) {
        const fullNameArray = value.split(" - ");
        person.firstName = fullNameArray[0];
        person.lastName = fullNameArray[1];
      },
    });

    return {
      person,
    };
  },

  //! 雖然一樣可以用vue2的寫法，並且這寫法也可以拿到setup裡的東西，但不建議這樣寫
  // computed: {
  //   fullName() {
  //     return `${this.person.firstName} - ${this.person.lastName}`;
  //   },
  // },
};
</script>

<style></style>
