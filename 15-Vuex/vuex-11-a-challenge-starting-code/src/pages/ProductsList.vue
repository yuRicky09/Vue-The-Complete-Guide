<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
    <button @click="console">console</button>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  // inject: ['products'],
  components: {
    ProductItem
  },
  computed: {
    ...mapState('productModule', ['products'])
  },
  methods: {
    ...mapActions('productModule', ['console'])
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
