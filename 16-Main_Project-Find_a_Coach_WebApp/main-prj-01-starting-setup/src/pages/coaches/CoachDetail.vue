<template>
  <div>
    <base-spinner v-if="isLoading"></base-spinner>
    <section v-if="!isLoading">
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section v-if="!isLoading">
      <base-card>
        <header>
          <h2>Interested? Reach out Now!</h2>
          <base-button isLink :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section v-if="!isLoading">
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :title="area"
          :mode="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoachDetail',
  props: ['id'],
  data() {
    return {
      selectedCoach: {},
      isLoading: false
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName}  ${this.selectedCoach.lastName}`;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    contactLink() {
      return `/coaches/${this.id}/contact`;
    },
    description() {
      return this.selectedCoach.description;
    }
  },
  methods: {
    async loadAllCoach() {
      this.isLoading = true;
      await this.$store.dispatch('coach/loadCoachData', true);
      this.matchSelectedCoach();
      this.isLoading = false;
    },
    matchSelectedCoach() {
      this.selectedCoach = this.$store.getters['coach/coaches'].find(
        coach => coach.id === this.id
      );
    }
  },
  created() {
    this.loadAllCoach();
  }
};
</script>

<style></style>
