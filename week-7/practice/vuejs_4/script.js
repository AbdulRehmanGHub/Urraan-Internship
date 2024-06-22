const myApp = Vue.createApp({
    data(){
        return{
            myName: true,
            role: true
        }
    }
});

const shop = Vue.createApp({
    data(){
        return{
            items: 10
        }
    }
});

const checkingText = Vue.createApp({
    data(){
        return{
            text: 'India is a beautiful country',
            message: 'India'
        }
    }
})

myApp.mount('#app')
shop.mount('#checkItem')
checkingText.mount('#checkText')