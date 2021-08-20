<template>
  <div>
    <ul>
      <li v-for="(message, index) in messageList" :key="message.id">
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
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
};
</script>
<style></style>
