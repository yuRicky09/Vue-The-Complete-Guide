<template>
  <div>
    <main v-if="!loading">
      <DataTitle :text="title" :time="dataDate" />
      <DataBox :state="state" />
      <CountrySelect :countries="countries" />
    </main>

    <main v-else class=" max-w-4xl mx-auto">
      <div class=" flex justify-center items-center flex-col">
        <p class=" text-3xl">loading....</p>
        <img :src="loadingImage" alt="loadingimg" class=" w-9" />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import DataTitle from "@/components/DataTitle";
import DataBox from "@/components/DataBox";
import CountrySelect from "@/components/CountrySelect";

export default {
  name: "Home",
  components: {
    DataTitle,
    DataBox,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      title: "",
      dataDate: "",
      state: {},
      countries: [],
      loadingImage: require("../assets/hourglass.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      try {
        this.loading = true;
        const res = await axios.get("https://api.covid19api.com/summary");
        const data = res.data;
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async init() {
      const data = await this.fetchCovidData();
      console.log(data);
      this.dataDate = data.Date;
      this.state = data.Global;
      this.countries = data.Countries;
      this.loading = false;
      this.title = "Global";
    },

    getConutryName(countryName) {
      const selectedCountry = this.countries.filter(
        (country) => country.Country === countryName
      );
      [this.state] = selectedCountry;
      this.title = countryName;
    },
  },
  created() {
    this.init();
  },
  mounted() {
    this.$bus.$on("getSelectedCountry", this.getConutryName);
    this.$bus.$on("resetData", this.init);
  },
};
</script>
