<template>
  <!-- dialog=窗口標籤 -->
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  margin: 0;
}
</style>
