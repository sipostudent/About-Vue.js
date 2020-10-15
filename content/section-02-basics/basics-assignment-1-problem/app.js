// VUE.JS

const app = Vue.createApp({
  data() {
    return {
      yourName: 'Sipo Charles',
      yourAge: 35,
      vueDjangoImage: 'https://miro.medium.com/max/1200/1*oOcXxxASUlopSNrn9KkqPA.png',
    };
  },
  methods: {
    agePlus() {
      return this.yourAge + 5;
    },
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');