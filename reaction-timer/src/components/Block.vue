<template>
  <base-card v-if="blockIsShowUp" @click="closeTimer">
    <h1>CLICK</h1>
  </base-card>
</template>
<script>
export default {
  name: "Block",
  props: ["delayTime"],
  emits: ["getTimer"],
  data() {
    return {
      blockIsShowUp: false,
      startTime: 0,
      endTime: 0,
      costTime: 0,
    };
  },
  methods: {
    closeTimer() {
      this.endTime = Date.now();
      this.costTime = this.endTime - this.startTime;
      this.$emit("getTimer", this.costTime);
      // this.init();
    },
    //! 不用初始化了 反正模板不顯示時就會被銷毀 在出現時就會重新用初始值了
    // init() {
    //   this.blockIsShowUp = false;
    //   this.startTime = 0;
    //   this.endTime = 0;
    //   this.costTime = 0;
    // },
  },
  mounted() {
    console.log("Block模板掛載完畢");
    setTimeout(() => {
      this.blockIsShowUp = true;
      this.startTime = Date.now();
    }, this.delayTime);
  },
  unmounted() {
    console.log("Block模板卸載完畢");
  },
};
</script>
