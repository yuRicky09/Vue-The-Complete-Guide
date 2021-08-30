<template>
  <div>
    <h1>Manage Goals</h1>
    <input type="text" ref="input" />
    <button @click="setNewGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="enteredValueIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters</p>
        <button @click="comfirmError">Okay</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      enteredValueIsInvalid: false,
    };
  },
  methods: {
    setNewGoal() {
      if (this.$refs.input.value === "") {
        this.enteredValueIsInvalid = true;
      }
    },
    comfirmError() {
      this.enteredValueIsInvalid = false;
    },
  },
};
</script>
