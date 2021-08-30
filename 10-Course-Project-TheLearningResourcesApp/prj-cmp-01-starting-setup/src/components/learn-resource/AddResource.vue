<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model.trim="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model.trim="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model.trim="link" />
      </div>
      <div class="form-control">
        <!-- 利用因為添加屬性在組件標籤上時會自動添加於組件根標籤的特性來省略寫props -->
        <base-button type="submit">Submit</base-button>
      </div>
    </form>
    <teleport to="body">
      <base-dialog v-if="isInvalidValue" title="提交失敗" @close="confirmError">
        <template #default>
          <p>輸入資料不符合</p>
          <p>請確保每個輸入框都有填入資料</p>
        </template>
        <template #actions>
          <base-button @click="confirmError">Okay</base-button>
        </template>
      </base-dialog>
    </teleport>
  </base-card>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  name: 'AddResource',
  emits: ['get-resource-data'],
  inject: ['getdata'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      isInvalidValue: false
    };
  },
  methods: {
    submitData() {
      //* 方法一 自定義事件
      // this.$emit('get-resource-data', {
      //   title: this.title,
      //   description: this.description,
      //   link: this.link
      // });
      //* 方法二 透過provide提供函數，在傳data給這函數
      // 驗證input
      if (this.title === '' || this.description === '' || this.link === '') {
        return (this.isInvalidValue = true);
      }
      const data = {
        title: this.title,
        description: this.description,
        link: this.link
      };
      this.getdata(data);

      // clear input
      (this.title = ''), (this.description = ''), (this.link = '');
    },
    confirmError() {
      this.isInvalidValue = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
