const app = Vue.createApp({
  data() {
    return {
      name: "Yu_Ricky",
      age: "26",
      img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      inputValue: "enter something!",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
