const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    getName(e, lastname = "御") {
      this.name = e.target.value + " " + lastname;
    },
    add() {
      this.counter++;
    },
    decrese() {
      this.counter--;
    },
    submitForm() {
      alert("Thank for submit!");
    },
    confirmName() {
      console.log("fn被執行了");
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
