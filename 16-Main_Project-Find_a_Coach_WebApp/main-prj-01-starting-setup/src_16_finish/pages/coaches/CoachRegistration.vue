<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="addCoach"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  name: 'CoachRegistration',
  components: {
    CoachForm
  },
  methods: {
    addCoach(data) {
      this.$store.dispatch('coach/addCoachData', data);

      //! 這邊用replace是因為我沒不希望用戶送完表單後，能夠按返回再回到表單頁
      this.$router.replace('/coaches');
    }
  }
};
</script>
