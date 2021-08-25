<template>
  <div>
    <h1>當前總和:{{ sum }}</h1>
    <button @click="sum++">點我+1</button>
    <br />
    <h1>訊息{{ msg }}</h1>
    <button @click="msg += '!'">點我加驚嘆號!</button>
    <br />
    <h1>姓名: {{ person.name }}</h1>
    <h1>年齡: {{ person.age }}</h1>
    <h1>薪資: {{ person.job.salary }}K</h1>
    <button @click="person.name += '~'">點我改姓名</button>
    <button @click="person.age++">點我改年齡</button>
    <button @click="person.job.salary++">點我加薪</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",

  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "Yu",
      age: 18,
      job: {
        salary: 20,
      },
    });
    console.log(person);

    //* 狀況一:監測一個ref所定義的響應式數據
    watch(sum, (newValue, oldValue) => {
      console.log("監測到了sum的改變", newValue, oldValue);
    });

    //* 狀況二:監測多個ref所定義的響應式數據
    //! 第三個參數可添加配置項， ref所定義的數據就不需要加deep了，都是純值型別不需要深層
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log("監測到多個ref數據的改變", newValue, oldValue);
      },
      { immediate: true }
    );

    //* 狀況三:監測一個reactive所定義的響應式數據的全部屬性
    //! 注意1. reactive定義下的數據在vue3會有個問題就是無法獲取正確的oldValue
    //!     2. 強制開啟深度監測模式，無法關閉
    watch(
      person,
      (newValue, oldValue) => {
        console.log("監測到person的改變", newValue, oldValue);
      },
      { deep: false }
    );

    //* 狀況四: 監測一個reactive所定義的響應式數據的某個屬性
    //! 下面這樣寫會錯，因為監視的對象是有寫法限制的 見錯誤訊息
    watch(person.age, (newValue, oldValue) => {
      console.log("監測到person的age的改變", newValue, oldValue);
    });

    //! 另外因為監測的是reactive定義的物件下的某個屬性，並且此屬性的值為純值型別，所以oldValue可以拿到
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log("監測到person的age的改變", newValue, oldValue);
    //   }
    // );

    //* 狀況五: 監測一個reactive所定義的響應式數據的多個屬性
    watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log("監測到person的age和name的改變", newValue, oldValue);
    });

    //* 狀況六: 特殊狀況 監測一個reactive所定義的響應式數據的某個屬性 並且此屬性的值為obj。
    //! 此處必須加深層監視的配置項，只有直接監測reactive的實體(根)時，會強制開啟深層監視，但監視時體內部的一個屬性(且值為一obj)時就必續自己添加配置。
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("監測到person的salary的改變", newValue, oldValue);
      },
      { deep: true }
    );
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
