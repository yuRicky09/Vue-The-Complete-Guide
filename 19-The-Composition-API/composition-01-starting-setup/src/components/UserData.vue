<template>
  <div>
    <h1>FullName:{{ fullName }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  name: 'UserData',
  props: ['firstName', 'lastName'],
  setup(props, context) {
    //! 響應式的是這整個props物件 所以今天你如果寫 firstName = props.firstName的話 你會讓這個變數丟失響應式(你只是在賦予一個值給這變數)。 而computed會持續監視這整個props obj被用到的屬性有沒有更新，有的話則再重新渲染模板。
    const fullName = computed(() => props.firstName + ' ' + props.lastName);

    console.log(context); //* 可以得到一個物件 內有attrs, emit, slots屬性可用

    // provide提供的東西為響應式的話，inject進來的東西當然也會是響應式。
    //! 不過一樣要維持Vue的原則，要改數據的話要在提供數據的地方改而不是接受的地方直接改(容易有bug)
    const age = inject('age');

    return {
      fullName,
      age
    };
  }
};
</script>

<style></style>
