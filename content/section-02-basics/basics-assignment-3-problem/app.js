const app = Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  computed: {
    result() {
      if (this.count < 37) {
        return 'Keep going!';
      } else if (this.count === 37) {
        return this.count;
      } else {
        return 'Past limit!';
      }
    }
  },
  watch: {
    result() {
      console.log('Watcher executing...');
      const that = this;
      setTimeout(function() {
        that.count = 0;
      }, 5000);
    }
  },
  methods: {
    addCount(num) {
      this.count = this.count + num;
    }
  }
});

app.mount('#assignment');