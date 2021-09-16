<template>
  <main>
    <user-list></user-list>
    <project-list></project-list>
  </main>
</template>

<script>
import UserList from './components/users/UserList.vue';
import ProjectList from './components/projects/ProjectList.vue';

export default {
  name: 'App',
  components: {
    UserList,
    ProjectList
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

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
