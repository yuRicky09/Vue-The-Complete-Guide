<template>
  <div>
    <button @click="toggleTitle">點我顯示/隱藏標題</button>
    <transition name="title">
      <h1 class="title" v-show="showTitle">開始學習Vue</h1>
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

.titile-enter-active {
  animation: titleAnimation 1s linear;
}

.title-leave-active {
  animation: titleAnimation 1s linear reverse;
}

@keyframes titleAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
