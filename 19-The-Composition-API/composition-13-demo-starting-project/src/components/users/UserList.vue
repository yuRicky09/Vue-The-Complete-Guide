<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue';
import useSearch from '../../hooks/search.js';

import { ref, computed, toRefs } from 'vue';
export default {
  components: {
    UserItem
  },
  props: ['users'],
  setup(props) {
    const { users } = toRefs(props);

    const {
      enteredSearchTerm,
      activeSearchTerm,
      availableItems,
      updateSearch
    } = useSearch(users, 'fullName');

    const sorting = ref('');
    const displayedUsers = computed(() => {
      if (!sorting.value) {
        return availableItems.value;
      }

      //! 用slice淺拷貝array
      return availableItems.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (sorting.value === 'asc') {
          return -1;
        } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else if (sorting.value === 'desc') {
          return 1;
        }
      });
    });

    const sort = function(mode) {
      sorting.value = mode;
    };

    return {
      enteredSearchTerm,
      activeSearchTerm,
      sorting,
      displayedUsers,
      updateSearch,
      sort
    };
  }

  //! 初始配置(未使用hooks時)

  // const enteredSearchTerm = ref('');
  // const activeSearchTerm = ref('');

  // //! computed計算屬性得到的return值 就是一個read only的ref object
  // const availableUsers = computed(() => {
  //   let users = [];
  //   if (activeSearchTerm.value) {
  //     users = props.users.filter(user =>
  //       user.fullName.includes(activeSearchTerm.value)
  //     );
  //   } else if (props.users) {
  //     users = props.users;
  //   }

  //   return users;
  // });
  // const updateSearch = function(val) {
  //   enteredSearchTerm.value = val;
  // };

  // watch(enteredSearchTerm, newVal => {
  //   setTimeout(() => {
  //     if (newVal === enteredSearchTerm.value) {
  //       activeSearchTerm.value = newVal;
  //     }
  //   }, 300);
  // });

  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //     sorting: null
  //   };
  // },
  // computed: {
  //   //* 藉由搜尋欄輸入值決定要秀出的users
  //   availableUsers() {
  //     let users = [];
  //     if (this.activeSearchTerm) {
  //       users = this.users.filter(usr =>
  //         usr.fullName.includes(this.activeSearchTerm)
  //       );
  //     } else if (this.users) {
  //       users = this.users;
  //     }
  //     return users;
  //   },
  //   //* 藉由計算屬性availableUsers的值與排列方式值決定users要怎麼展示
  //   displayedUsers() {
  //     if (!this.sorting) {
  //       return this.availableUsers;
  //     }
  //     return this.availableUsers.slice().sort((u1, u2) => {
  //       if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
  //         return 1;
  //       } else if (this.sorting === 'asc') {
  //         return -1;
  //       } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     });
  //   }
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  //   sort(mode) {
  //     this.sorting = mode;
  //   }
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   }
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
