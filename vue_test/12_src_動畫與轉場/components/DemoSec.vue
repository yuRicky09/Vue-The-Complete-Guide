<template>
  <div>
    <button @click="toggleTitle">點我顯示/隱藏標題</button>
    <transition>
      <h1 class="title" v-show="showTitle">開始學習Vue2</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      showTitle: true,
    };
  },
  methods: {
    toggleTitle() {
      this.showTitle = !this.showTitle;
    },
  },
};
</script>

<style scoped>
.title {
  background-color: orange;
}

.v-enter,
.v-leave-to {
  transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active {
  transition: transform 1s linear;
}

.v-enter-to,
.v-leave {
  transform: translateX(0);
}
</style>
