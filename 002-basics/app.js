const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vuee!',
            vueLink: 'https://vuejs.org/'
         };
    }
});

app.mount('#user-goal');