<template>
  <div class="container">
    <Category>
      <template slot-scope="{ listData }">
        <ul>
          <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category>
      <template slot-scope="{ listData }">
        <ol>
          <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category>
      <template slot-scope="{ listData }">
        <h4>
          <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  list-style: none;
}
.container {
  width: 1020px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: pink;
}
.container div {
  border: 1px solid #aaa;
  width: 33%;
  height: 500px;
}
img {
  width: 100%;
}
</style>
