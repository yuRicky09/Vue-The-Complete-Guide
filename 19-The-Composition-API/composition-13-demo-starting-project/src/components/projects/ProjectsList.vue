<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search';

import { computed, watch, toRefs } from 'vue';

export default {
  components: {
    ProjectItem
  },
  props: ['user'],
  setup(props) {
    // const enteredSearchTerm = ref('');
    // const activeSearchTerm = ref('');

    // const availableProjects = computed(() => {
    //   if (activeSearchTerm.value) {
    //     return props.user.projects.filter(prj =>
    //       prj.title.includes(activeSearchTerm.value)
    //     );
    //   }
    //   return props.user.projects;
    // });

    // const updateSearch = function(val) {
    //   enteredSearchTerm.value = val;
    // };
    const { user } = toRefs(props);

    //! 我們希望props的user一改變，就要拿到這個新user的projects，所以使用computed來幫我們達成 只要user一變就會執行
    const projects = computed(() => {
      return user.value ? user.value.projects : [];
    });

    const {
      enteredSearchTerm,
      activeSearchTerm,
      availableItems,
      updateSearch
    } = useSearch(projects, 'title');

    watch(enteredSearchTerm, newVal => {
      setTimeout(() => {
        if (newVal === enteredSearchTerm.value) {
          activeSearchTerm.value = newVal;
        }
      }, 300);
    });

    const hasProjects = computed(() => {
      return props.user.projects && availableItems.value.length > 0;
    });

    //! 這樣會監測失敗是因為這樣我們只是在watch一個純值， 而不是reactive數據。 整個props物件才是reactive數據。
    //! 但如果就是只想觀察props物件裡的某個屬性時可以依靠toRefs來幫忙
    // watch(props.user, ()=>{
    //   enteredSearchTerm.value = '';
    // })
    watch(user, () => {
      enteredSearchTerm.value = '';
    });

    return {
      enteredSearchTerm,
      activeSearchTerm,
      hasProjects,
      availableProjects: availableItems,
      updateSearch
    };
  }
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   }
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
