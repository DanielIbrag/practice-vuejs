var App = {
  number1=0
  number2=0
  number3=0
  sum=0
  data: function () {
    return {
      message: "Hello from JavaScript",
      name: "Danny",
      count: 1,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "goodbye! happy birthday merry christmas!";
    },
  },
};

Vue.createApp(App).mount("#app");
