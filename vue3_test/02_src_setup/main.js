//* Vue3引入的是一個函數可直接使用不需要new Vue2則是引入建構函數
import { createApp } from "vue";
import App from "./App.vue";

//* 另一個差異是createApp(App)所創造出來的實體物件相較於Vue2的vm比起來更'輕'。 不會把所有的屬性跟方法都掛在身上。
createApp(App).mount("#app");

//* Vue2寫法
// const vm = new Vue({
//   render: (h) => h(App),
// });
// vm.$mount("#app");
