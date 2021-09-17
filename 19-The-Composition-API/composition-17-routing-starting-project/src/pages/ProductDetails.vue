<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { inject } from 'vue';
//! 由於composition的setup裡無法用this，當我們想要用this.$route取得一些route給我們的東西時就會辦不到
//! 因此vue-router套件也為了composition API提供了一些methods
import { useRoute } from 'vue-router';

export default {
  //*方法一 用props來取得params
  // props: ['pid'],
  // setup(props) {
  //   const products = inject('products');
  //   const selectedProduct = products.value.find(pro => pro.id === props.pid);
  //   const { title, price, description } = selectedProduct;
  //   return { title, price, description };
  // }
  //* 方法二 用套件提供給compositionAPI的方法
  setup() {
    const products = inject('products');
    const route = useRoute();
    console.log(route);
    const selectedProduct = products.value.find(
      pro => pro.id === route.params.pid
    );
    const { title, price, description } = selectedProduct;
    return { title, price, description };
  }
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
