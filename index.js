/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      potato: "This is a potato",
    };
  },
  methods: {
    morePotato: function () {
      this.potato += " potato";
    },
  },
};

Vue.createApp(App).mount("#app");
