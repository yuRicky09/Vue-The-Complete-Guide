<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <button @click="selectedComponent('ActiveGoal')">Active Goals</button>
    <button @click="selectedComponent('ManageGoal')">Manage Goals</button>
    <!-- 動態component -->
    <!-- 這種寫法相比把用到的componemt都寫到模板上再用v-if做判斷來說 code明顯精簡且易懂 -->
    <keep-alive include="ManageGoal">
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";

export default {
  components: {
    TheHeader,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      activeComponent: "ActiveGoal",
    };
  },
  methods: {
    selectedComponent(cmp) {
      this.activeComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
