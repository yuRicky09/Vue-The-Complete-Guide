<template>
  <transition-group name="user-list" tag="ul">
    <li v-for="user in users" :key="user" @click="deleteUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model="enteredUserName" />
    <button @click="addUser">add User</button>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: ['Yu', 'Ricky', 'Jack', 'King', 'Hsu'],
      enteredUserName: ''
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.enteredUserName);
      this.enteredUserName = '';
    },
    deleteUser(deleteUser) {
      this.users = this.users.filter(user => user !== deleteUser);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}

ul li {
  background-color: burlywood;
  margin: 20px 10px;
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
}

li:hover {
  opacity: 0.7;
}

.user-list-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.user-list-enter-active {
  transition: all 0.8s ease-in;
}

.user-list-enter-to,
.user-list-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.user-list-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.user-list-leave-active {
  transition: all 0.8s ease-out;
  position: absolute;
}

.user-list-move {
  transition: transform 0.8s ease-in;
}
/* @keyframes slide-in {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
} */
</style>
