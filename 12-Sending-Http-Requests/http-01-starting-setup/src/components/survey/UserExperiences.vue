<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadServeyData"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="errorMessage">{{ errorMessage }}</p>
      <p v-else-if="!isLoading && (!results || !results.length)">
        Don't have any Submitted Experiences
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: ''
    };
  },
  components: {
    SurveyResult
  },
  methods: {
    async loadServeyData() {
      try {
        this.errorMessage = '';
        this.isLoading = true;
        const res = await axios.get(
          'https://learning-survey-project-default-rtdb.firebaseio.com/surveys.json'
        );
        console.log(res);

        this.isLoading = false;

        const data = res.data;
        const serveyList = [];
        for (const id in data) {
          const serveyData = {
            id: id,
            name: data[id].userName,
            rating: data[id].rating
          };

          serveyList.push(serveyData);
        }

        this.results = serveyList;
      } catch (err) {
        this.isLoading = false;
        this.errorMessage = err.message;
      }
    }
  },
  async mounted() {
    this.loadServeyData();
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
