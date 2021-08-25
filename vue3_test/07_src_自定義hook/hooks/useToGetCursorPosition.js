import { reactive, onMounted, onUnmounted } from "vue";

export default function() {
  // 鼠標位置的數據
  const position = reactive({
    x: 0,
    y: 0,
  });

  // 獲取鼠標位置的方法
  const getPosition = function(e) {
    position.x = e.pageX;
    position.y = e.pageY;
  };

  // 獲取鼠標位置時所使用的生命週期鉤子
  onMounted(() => {
    window.addEventListener("click", getPosition);
  });

  onUnmounted(() => {
    window.removeEventListener("click", getPosition);
  });

  return position;
}
