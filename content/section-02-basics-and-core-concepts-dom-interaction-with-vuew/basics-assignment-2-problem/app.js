const app = Vue.createApp({
  data() {
    return {
      userInput: '', confirmedInput: '',
    };
  },
  methods: {
    alertPopup() {
      alert('Yaay! The alert popup is working!');
    },
    registerInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    }
  }
});

app.mount('#assignment');