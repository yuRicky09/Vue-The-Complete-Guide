Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const addBtn = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// const addList = function () {
//   const inputValue = inputEl.value;
//   const listItem = document.createElement("li");
//   listItem.innerText = inputValue;

//   listEl.appendChild(listItem);

//   inputEl.value = "";
// };

// addBtn.addEventListener("click", addList);
