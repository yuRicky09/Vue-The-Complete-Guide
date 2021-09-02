<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link :to="`/teams/t2`">go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ['teamId'],
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // }
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  },
  methods: {
    loadTeamMembers(teamId) {
      console.log('teamMember組件掛載');
      //! 因為現在是用wacth監測$route的改變，所以由此路由組件跳轉其他路徑時，watch內的動作也會觸發，可是當跳轉的路徑根本沒有參數teamId的話 就會造成此變數是undefined 下面程序就會執行失敗而報錯。 所以加一道防護線
      // const teamId = route.params.teamId;
      if (!teamId) return;

      const { members, name } = this.teams.find(team => team.id === teamId);

      const selectedMember = [];
      members.forEach(member => {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMember.push(selectedUser);
      });

      this.members = selectedMember;
      this.teamName = name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  unmounted() {
    console.log('teamMember組件卸載');
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
