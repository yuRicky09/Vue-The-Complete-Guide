<template>
  <div>
    <!-- 兩個驚嘆號是要把這個值轉為布林值 -->
    <base-dialog :show="!!errorMessage" title="錯誤" @close="handleError">
      <p>{{ errorMessage }}</p>
    </base-dialog>
    <section>
      <coach-filter @area-change="updataCoachList"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoachList(true)"
            >Refresh</base-button
          >
          <base-button
            v-if="!isAuthenticated"
            isLink
            :to="{ path: '/auth', query: { jumpToRegister: true } }"
            >Login to Register as Coach</base-button
          >
          <base-button
            isLink
            to="/register"
            v-if="isAuthenticated && !isCoach && !isLoading"
            >Register As A Coach</base-button
          >
        </div>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasCoach">
          <coach-item
            v-for="coach in coaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :rate="coach.hourlyRate"
          ></coach-item>
        </ul>
        <h3 v-else>Now We don't have any coach!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  name: 'CoachesList',
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      errorMessage: null,
      coaches: []
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapGetters('coach', ['hasCoach', 'isCoach'])
    // coaches() {
    //   return this.$store.getters['coach/coaches'];
    // }
  },
  methods: {
    updataCoachList(selectedArea) {
      //收集篩取條件
      const filterArea = [];
      for (let keyName in selectedArea) {
        filterArea.push(selectedArea[keyName]);
      }

      //比對每個coach擅長的領域是否有符合篩選
      this.coaches = this.$store.getters['coach/coaches'].filter(coach => {
        for (let area of coach.areas) {
          if (filterArea.includes(area)) {
            return true;
          }
        }
      });
    },
    async loadCoachList(reloadByRefreshBtn = false) {
      try {
        //! 使用dispatch時，其實會回傳一個promise
        this.isLoading = true;
        await this.$store.dispatch('coach/loadCoachData', reloadByRefreshBtn);
        this.isLoading = false;

        //! 因為data是在created這階段解析完成，而我們調用loadCoachList()方法是在data解析完後的created階段，所以如果是在data寫this.coaches: this.$store.getters['coach/coaches']會拿不到fecth下來的數據(初始時)，所以才要加下面這句。
        this.coaches = this.$store.getters['coach/coaches'];
      } catch (err) {
        this.errorMessage = err.message;
      }
    },
    handleError() {
      this.errorMessage = null;
    }
  },
  created() {
    this.loadCoachList();
  }
  // beforeMount() {
  //   this.data;
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
