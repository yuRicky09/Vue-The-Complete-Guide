<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  name: 'requestItem',
  props: ['email', 'message'],
  computed: {
    emailLink() {
      //! 連結寫法mailto: +email地址的話， 點擊後會讓用戶可以直接跳轉到gmail寄信。
      return 'mailto:' + this.email;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
