const app = Vue.createApp({
  data() {
    return {
      enterValue: "",
      showParagraph: true,
      color: '',
    };
  },
  computed: {
    paraClasses(){
      return {
        user1: this.enterValue === 'user1',
        user2: this.enterValue === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph
      }
    }
  },
  methods: {
    showP(){
      this.showParagraph =!this.showParagraph
    }
  },
});
app.mount('#assignment');
