<template>
  <base-container>
    <h1>用戶列表</h1>
    <base-search-bar @searching="findMatchUser"></base-search-bar>
    <button @click="sortUsers('asc')" :class="{ selected: sortMode === 'asc' }">
      正序排列
    </button>
    <button
      @click="sortUsers('desc')"
      :class="{ selected: sortMode === 'desc' }"
    >
      逆序排列
    </button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :userId="user.id"
        :userName="user.fullName"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue';
export default {
  name: 'UserList',
  components: {
    UserItem
  },
  data() {
    return {
      users: [],
      inputValue: '',
      sortMode: null
    };
  },
  methods: {
    findMatchUser(enteredValue) {
      const users = this.$store.getters.users;
      const matchUsers = users.filter(user => {
        const reg = new RegExp(enteredValue, 'ig');
        //! 正規表達式test方法會回傳布林值， 當代入字串與正規表達式物件有match就回傳true，反之為false
        return reg.test(user.fullName);
      });
      this.users = matchUsers;
      this.sortUsers(this.sortMode);
    },
    sortUsers(mode) {
      this.sortMode = mode;

      if (this.sortMode === null) return;

      this.users.sort((a, b) => {
        if (this.sortMode === 'asc') {
          if (a.fullName > b.fullName) {
            return 1; //! return 正數則前面的會往後放
          } else {
            return -1; //! return 負數則前面的依然放前面
          }
        } else if (this.sortMode === 'desc') {
          if (a.fullName < b.fullName) {
            return 1;
          } else {
            return -1;
          }
        }
      });
    }
  },
  created() {
    this.users = this.$store.getters.users;
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
