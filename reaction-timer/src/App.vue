<template>
  <div>
    <h1>來測試你的反應速度吧!!</h1>
  </div>
  <button @click="startGame" :disabled="isPlaying">play</button>
  <block :delayTime="delayTime" v-if="isPlaying" @getTimer="getTimer"></block>
  <results :time="time" v-if="!isPlaying && this.time > 0"></results>
</template>

<script>
// 1.點擊按鈕開始遊戲
// 2.過2~7秒後秀出Block組件。
// 3.計算出Block組件秀出後到用戶點擊block組件後的時間
// 4.利用此時間來判斷遊戲結果分數 遊戲結束。
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delayTime: null,
      time: 0,
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delayTime = 2000 + Math.random() * 5000;
    },
    getTimer(costTime) {
      this.time = costTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 20px;
  background-color: cornflowerblue;
}

button:hover,
button:active {
  opacity: 0.8;
}

button[disabled] {
  opacity: 0.2;
  cursor: none;
}
</style>
