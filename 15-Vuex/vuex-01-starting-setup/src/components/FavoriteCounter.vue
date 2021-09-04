<template>
  <section>
    <p>當前和乘3被後為:{{ MultiplyCounter }}</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FavoriteCounter',
  computed: {
    ...mapGetters[('counterModule', ['MultiplyCounter'])]
  }
};
</script>

<style></style>
