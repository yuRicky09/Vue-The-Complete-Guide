const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      hidden: false,
    };
  },
  computed: {
    btnInfo() {
      return this.hidden ? "Show List" : "Hide";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggleList() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
