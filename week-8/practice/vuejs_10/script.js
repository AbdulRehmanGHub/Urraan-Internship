const webDevelopment = Vue.createApp({
    data(){
        return{
            imgURL: '../img/css.png',
            webDev: [
                {name: 'HTML', url:'../img/html.png'},
                {name: 'CSS', url:'../img/css.png'},
                {name: 'JAVASCRIPT', url:'../img/js.png'},
                {name: 'TAILWIND', url:'../img/tailwind.png'},
                {name: 'BOOTSTRAP', url:'../img/bootstrap.png'},
                {name: 'VUE JS', url:'../img/vuejs.png'},
                {name: 'REACT', url:'../img/react.png'},
                {name: 'GIT', url:'../img/git.png'},
                {name: 'GITHUB', url:'../img/github.png'}
                
            ]
        }
    }
});

webDevelopment.mount('#changingImg')