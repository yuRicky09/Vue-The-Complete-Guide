<template>
  <!-- 因為這邊有兩個根元素，我們無法透過在父組件上直接於子組件標籤上定義事件click -->
  <div @click="$emit('close')"></div>
  <dialog open>
    <header>
      <!-- 為slot加預設值，讓彈性更加提高 可以自己提供HTML結構or用預設 -->
      <slot name="title">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <menu>
      <slot name="actions">
        <base-button>Clear</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  name: 'BaseDialog',
  props: ['title'],
  emits: ['close']
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
