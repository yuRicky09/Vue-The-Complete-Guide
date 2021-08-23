<template>
  <div>
    <Test></Test>
    <Banner></Banner>
    <div class="container">
      <nav>
        <ul>
          <!-- <li><a href="#" class="active">About</a></li>
        <li><a href="#">Home</a></li> -->
          <li>
            <!-- router-link標籤最終被vue-router解析完畢時會變成a標籤 使用to屬性決定路徑 active-class能添加活躍時要添加的屬性 -->
            <router-link to="/about" active-class="active">About</router-link>
          </li>
          <li>
            <router-link to="/home" active-class="active">Home</router-link>
          </li>
        </ul>
      </nav>
      <div class="content">
        <h2>這邊展示組件</h2>
        <!-- 使用router-view決定要顯示的路由組件的位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Test from "./components/Test";

export default {
  name: "App",
  components: {
    Banner,
    Test,
  },
};
</script>

<style>
.container {
  display: flex;
  max-width: 1020px;
  margin: 0 auto;
  margin-top: 50px;
}

.container nav {
  width: 20%;
  border: 1px solid palevioletred;
}

nav ul li {
  margin-bottom: 20px;
}

ul li a {
  color: black;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
}

ul li a:hover {
  background-color: #eee;
}

.active {
  background-color: cornflowerblue;
}

.container .content {
  width: 70%;
}
</style>
