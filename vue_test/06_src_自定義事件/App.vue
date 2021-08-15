<template>
  <div class="container">
    {{ msg }}
    <br />
    <!-- 子組件傳data給父組件 -->
    <!-- 1.使用props 父組件先傳給子組件一個函數，子組件利用此函數傳參數(想給的data)給父組件 -->
    <School :getSchoolName="getSchoolName"></School>
    <br />
    <!-- 2.使用自定義事件 當在組件標籤上定義事件後，此事件就會定義在此組件的實體上-->
    <Student v-on:passData="getStudentName"></Student>
    <!-- 自定義事件也可使用事件修飾符，其他事件修飾符大多只能使用於內建事件 -->
    <!-- <Student v-on:passData.once="getStudentName"></Student> -->
    <!-- 3.使用ref 在組件標籤上使用ref 讓我們可以直接抓到這個組件的實體，並於實體上直接監聽自定義事件(雖寫法較複雜，但操作性高)-->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "自定義事件",
    };
  },
  methods: {
    getSchoolName(data) {
      console.log("我收到了school組件傳過來的name了", data);
    },
    getStudentName(data) {
      console.log("我收到了student組件傳過來的name了", data);
    },
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.$refs.student.$on("passData", this.getStudentName);
  //   }, 3000);
  // },
};
</script>

<style scoped>
.container {
  background-color: #aaa;
}
</style>
