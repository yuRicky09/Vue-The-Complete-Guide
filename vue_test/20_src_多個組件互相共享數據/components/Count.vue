<template>
  <div>
    <h1>下方組件之人數數量為:{{ personList.length }}</h1>
    <!-- 模板能直接拿到所有掛在於實體上的東西 -->
    <h1>計算之和為{{ sum }}</h1>
    <h1>計算之和的10倍為{{ multiplySum }}</h1>
    <select v-model.number="selectedNumber">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(selectedNumber)">+</button>
    <button @click="decrement(selectedNumber)">-</button>
    <button @click="addWhenOdd(selectedNumber)">當為奇數時+</button>
    <button @click="addDelay(selectedNumber)">等一下再加</button>
  </div>
</template>

<script>
//* 使用Vuex提供的method讓我們更精簡的語法去使用掛載於$store身上的屬性、方法。
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      selectedNumber: 1,
    };
  },
  computed: {
    //! 下面這行mapState就會自動幫我們產出{ sum: f(){return this.$store.state.sum}}，key會指向computed屬姓名，後面字串會指向state裡的對應key。
    //! 因為回傳的是個obj，使用展開運算子散開。
    // ...mapState({ sum: "sum" }),

    //! 如果key名跟值都設定同名可用array寫法在簡寫
    ...mapState(["sum", "personList"]),

    ...mapGetters(["multiplySum"]),
  },
  methods: {
    //! 如果dispatch的任務沒有任何商業邏輯在，也就是說這任務可以直接commit給mutations的話就直接使用commit。
    //! 商業邏輯可都寫在actions
    //! 記得要在模板使用時帶入想給的參數，下面這寫法他只知道你method名與對應的key但不知道參數，而這時不給的話就會因為這函數是監聽事件的回調而參數自動變eventObj。
    ...mapMutations({ increment: "Increment", decrement: "Decrement" }),
    ...mapActions(["addWhenOdd", "addDelay"]),
  },
  mounted() {
    console.log(mapState({ sum: "sum" }));
  },
};
</script>

<style></style>
