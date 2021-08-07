const app = Vue.createApp({
  data() {
    return {
      goal: "Master Vue",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    getGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? "Master Vue" : "Learn Vue";
    },
  },
});

app.mount("#user-goal");
