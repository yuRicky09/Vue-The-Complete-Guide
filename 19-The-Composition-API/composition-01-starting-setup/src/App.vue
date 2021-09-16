<template>
  <section class="container">
    <div>
      <label for="firstName">FirstName:</label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>
    <div>
      <label for="lastName">LastName:</label>
      <input type="text" id="lastName" v-model="lastName" />
    </div>
    <button @click="changeAge">Change User Age</button>
    <user-data
      :firstName="firstName"
      :lastName="lastName"
      :age="age"
    ></user-data>
  </section>
</template>

<script>
import { ref, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },

  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(25);

    const changeAge = function() {
      age.value = 30;
    };

    provide('age', age);

    return {
      firstName,
      lastName,
      age,
      changeAge
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
