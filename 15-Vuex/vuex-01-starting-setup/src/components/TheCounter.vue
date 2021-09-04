<template>
  <section>
    <p>當前合為:{{ counter }}</p>
    <button @click="increment">Add 1</button>
    <br />
    <br />
    <hr />
    <br />
    <button @click="delayIncre">延遲兩秒在加</button>
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'TheCounter',
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // },
    ...mapMutations('counterModule', ['increment']),
    ...mapActions('counterModule', { delayIncre: 'increment' })
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // }
    ...mapState('counterModule', ['counter'])
  }
};
</script>

<style></style>
