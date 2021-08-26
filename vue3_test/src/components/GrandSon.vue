<template>
  <div class="grand-son">
    <h2>我是子孫組件</h2>
    <h2>我收到了父組件的汽車資料 {{ name }} ---- {{ price }}</h2>
    <h2>{{ a }}</h2>
    <button @click="changeCarName">點我修改汽車名</button>
    <button @click="a++">點我修改a</button>
  </div>
</template>
<script>
import { inject, toRefs } from "vue";

export default {
  name: "GrandSon",

  setup() {
    const car = inject("carData");
    let a = inject("A");
    console.log(car);
    //! 對祖先給的數據做修改時，也會影響到祖先數據的更動。
    const changeCarName = function() {
      car.name += "!";
    };

    return {
      a,
      ...toRefs(car),
      changeCarName,
    };
  },
};
</script>
<style scoped>
.grand-son {
  background-color: antiquewhite;
  padding: 20px;
}
</style>
