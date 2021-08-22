<template>
  <div>
    <ul>
      <li v-for="(message, index) in messageList" :key="message.id">
        <!-- 需注意params傳參時用obj寫法時只能搭配name屬性來決定跳轉不能搭配path -->
        <router-link
          :to="{
            name: 'messageItem',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
          >Message{{ index + 1 }}</router-link
        >
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "標題001",
        },
        {
          id: "002",
          title: "標題002",
        },
        {
          id: "003",
          title: "標題003",
        },
      ],
    };
  },
  mounted() {
    console.log("Message路由組件完成掛載");
  },
  beforeDestroy() {
    console.log("Message路由組件將被銷毀");
  },
};
</script>
<style></style>
