<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <div v-if="showTheGoal">
    <h3 v-for="goal in courseGoals" :key="goal">{{ goal }}</h3>
  </div>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref, reactive } from 'vue';

export default {
  // setup() {
  //   // const courseGoal = ref('Be a Vue Master');
  //   const courseGoals = reactive(['Be a Vue Mater', 'Be a forntend developer']);
  //   const showTheGoal = ref(true);

  //   console.log(courseGoals);

  //   const toggleGoal = function() {
  //     showTheGoal.value = !showTheGoal.value;
  //   };

  //   return {
  //     courseGoals,
  //     showTheGoal,
  //     toggleGoal
  //   };
  // }
  data() {
    return {
      courseGoals: ['Be a Vue Mater', 'Be a forntend developer'],
      showTheGoal: true
    };
  },
  methods: {
    toggleGoal() {
      this.showTheGoal = !this.showTheGoal;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
