<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
    <keep-alive include="AddResource">
      <component :is="selectedTab" @get-resource-data="addResource"></component>
    </keep-alive>
  </base-card>
</template>
<script>
import AddResource from './AddResource.vue';
import StoredResource from './StoredResource.vue';

export default {
  components: {
    AddResource,
    StoredResource
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'officlal-guide',
          title: 'Officail Guild',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'google',
          description: 'Learn from google',
          link: 'https://google.com'
        }
      ]
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? 'null' : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? 'null' : 'flat';
    }
  },
  methods: {
    //! 小觀念: 如果在自訂義的組件標前上傳prop or 監聽事件，在vue3這些prop跟監聽事件預設下會監聽在自訂義組件的根標籤上。
    setSelectedTab(selected) {
      this.selectedTab = selected;
    },
    //* 方法一使用自定義事件
    addResource(data) {
      console.log(data);
      const { title, description, link } = data;
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: link
      };
      this.storedResources.unshift(newResource);

      // 提交完後切換到stored-resource組件
      this.selectedTab = 'stored-resource';
    },
    deleteResource(deleteid) {
      //! 不能用filter的原因見下方
      // this.storedResources = this.storedResources.filter(
      //   res => res.id !== deleteid
      // );
      // console.log(this.storedResources);
      const deleteItemIndex = this.storedResources.findIndex(
        res => res.id === deleteid
      );
      this.storedResources.splice(deleteItemIndex, 1);
    }
  },
  provide() {
    return {
      //! 這裡有個重要的小細節 provide提供出去的傳址類型數據， 如果希望接收此數據的組件數據也要響應式的話，必須使用回直接更改原數據的方法，不能給重新產出一個新的地址的陣列，因為他只會一直監視原先地址(記憶體位置)的陣列數據
      storedResources: this.storedResources,
      //* 方法二使用provide傳函數
      getdata: this.addResource,
      deleteData: this.deleteResource
    };
  }
};
</script>
<style scoped></style>
