const countApp = Vue.createApp({
    data() {
        return {
            count: 0,
            lightOn: true
        }
    },
    methods: {
        toggleBackgroundColor() {
            this.lightOn = !this.lightOn;
            document.body.className = this.lightOn ? 'lightBG' : 'darkBG';
        }
    }
});

countApp.mount('#app');