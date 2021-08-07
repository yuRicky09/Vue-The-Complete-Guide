const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You click the btn!");
    },
    getUserEnter(e) {
      this.output = e.target.value;
    },
    confirmedOutput(e) {
      this.confirmOutput = e.target.value;
    },
  },
});

app.mount("#assignment");
