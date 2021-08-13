const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

let message = "Hello";
let longMessage = message + " World";

console.log(longMessage); //=>Hello World

message = "Hello!!!!!";

console.log(longMessage); // Hello World

//! Proxy翻成中文為代理之意

//! Proxy 是一個函式物件（可被建構），他提供一個機會讓你能介入一般物件的基本操作行為，像是在你 assign 一個值給某個物件時，可以透過 Proxy 先進行一些 validation 等等，藉此讓使用被代理過後的物件之開發者可以專注在其他核心功能上。

const data = {
  message: "Hello",
  longMessage: "World",
};

// const handler = {
//   set(target, key, value) {
//     console.log("target:", target); // target: {message: "Hello", longMessage: "Hello world"}
//     console.log("key:", key); // key: message
//     console.log("value:", value); // value: Hello!!!!
//   },
// };

// const proxyData = new Proxy(target, handler)

const handler = {
  set(target, key, value) {
    target[key] = value;
    target.longMessage = value + target.longMessage;
  },
};

const proxyData = new Proxy(data, handler);

proxyData.message = "Hello!!!!";
console.log(proxyData.longMessage); // Hello!!!!World
