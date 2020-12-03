const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      console.log("Running!");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Blajiu";
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
