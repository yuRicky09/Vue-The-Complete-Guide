const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    number(value) {
      if (value === 37 || value > 37) {
        const that = this;
        setTimeout(() => {
          that.number = 0;
        }, 5000);
        console.log(value);
      }
    },
  },
  computed: {
    guessNumber() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else if (this.number === 37) {
        return "You guess that";
      }
    },
  },
  methods: {
    addFive() {
      console.log(this.number);
      this.number += 5;
    },
    addOne() {
      this.number += 1;
    },
  },
});

app.mount("#assignment");
