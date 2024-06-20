const newApp = Vue.createApp({
    data() {
        return {
            size: "50",
            color: "yellow"
        }
    }
})

newApp.mount('#container')