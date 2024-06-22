const gameShowHide = Vue.createApp({
    data() {
        return {
            // myDiv: false,         // this will hide the selected data...
            myDiv: true,
        }
    }
});

gameShowHide.mount("#container")