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
        <button @click="pushMethodTo(message)">
          已push歷史紀錄方式跳轉頁面
        </button>
        <button @click="replaceMethodTo(message)">
          已replace歷史紀錄方式跳轉頁面
        </button>
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
  methods: {
    pushMethodTo(message) {
      //! router才是掌管所有路由歷史紀錄的人，所以想找歷史紀錄相關的API請找router。
      this.$router.push({
        name: "messageItem",
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
    replaceMethodTo(message) {
      this.$router.replace({
        name: "messageItem",
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
};
</script>
<style></style>
