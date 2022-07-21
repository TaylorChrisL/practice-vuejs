/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Spudson",
      potato: "This is a potato",
      checked: "Yup its here",
    };
  },
  methods: {
    morePotato: function () {
      var howManyPotatos = ["One potato", "Two Potato", "Three Potato", "Four"];
      this.potato = howManyPotatos[Math.floor(Math.random() * howManyPotatos.length)];
    },
  },
};

Vue.createApp(App).mount("#app");
