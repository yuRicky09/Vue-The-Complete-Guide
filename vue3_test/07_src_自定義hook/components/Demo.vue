<template>
  <div>
    <h2>當前點擊時滑鼠座標為X:{{ position.x }} Y:{{ position.y }}</h2>
  </div>
</template>

<script>
import useToGetCursorPosition from "../hooks/useToGetCursorPosition";

export default {
  name: "App",

  setup() {
    const position = useToGetCursorPosition();

    return {
      position,
    };
  },
};
</script>

<style></style>
