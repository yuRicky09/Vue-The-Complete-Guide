<template>
  <router-link :to="{ name: 'Home' }">Back to HomePage</router-link>
  <router-link :to="{ name: 'ChatRoom' }">Back to ChatRoom</router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
