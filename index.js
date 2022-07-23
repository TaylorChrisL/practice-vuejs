/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Spudson",
      potato: "This is a potato",
      checked: "Yup its here",
      potatos: ["One potato", "Two Potato", "Three Potato", "Four"],
      newPotato: "",
      showBigPotato: false,
    };
  },
  methods: {
    morePotato: function () {
      var howManyPotatos = ["One potato", "Two Potato", "Three Potato", "Four"];
      this.potato = howManyPotatos[Math.floor(Math.random() * howManyPotatos.length)];
    },
    addNewPotato: function () {
      this.potatos.push(this.newPotato);
      this.newPotato = "";
    },
  },
};

Vue.createApp(App).mount("#app");
