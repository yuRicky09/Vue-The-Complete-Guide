<template>
  <div class="container">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
  <div class="container">
    <user-list></user-list>
  </div>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <!-- 這樣沒有是因為transition的子元素之能有一個，而 base-modal這個組件的根元素有兩個會讓transition組件不知道把特殊class名添加到哪-->
  <!-- <transition name="modal">
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </transition> -->
  <!-- v-if如果在transition外的話就會讓transition失效 -->
  <base-modal @close="hideDialog" :dialogIsVisible="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition name="user-button" mode="out-in">
      <button @click="toggleUserBtn" v-if="isDefaultUserBtn">Show User</button>
      <button @click="toggleUserBtn" v-else>Hide User</button>
    </transition>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';

export default {
  data() {
    return { dialogIsVisible: false, isDefaultUserBtn: true };
  },
  components: {
    UserList
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleUserBtn() {
      this.isDefaultUserBtn = !this.isDefaultUserBtn;
    }
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.user-button-enter-from,
.user-button-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.user-button-enter-active {
  transition: all 0.3s ease-out;
}

.user-button-leave-active {
  transition: all 0.3s ease-in;
}

.user-button-enter-to,
.user-button-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
