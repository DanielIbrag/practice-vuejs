var App = {
  data: function () {
    return {
      message: "",
      answer: 57,
      guess: null,
    };
  },
  methods: {
    checkGuess: function () {
      if (parseInt(this.guess) > this.answer) {
        this.message = "Too High!";
      } else if (parseInt(this.guess) < this.answer) {
        this.message = "Too Low!";
      } else if (parseInt(this.guess) === this.answer) {
        this.message = "Correct!";
      }
    },
    resetGame: function () {
      this.message = "";
      this.guess = null;
      this.answer = 1 + Math.floor(Math.random() * Math.floor(100));
      console.log(this.answer);
    },
  },
};

Vue.createApp(App).mount("#app");
