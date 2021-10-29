Vue.config.devtools = true;

const vueApp = new Vue({
    el: '#root',
    data: {
        myName: "Maria",
        //today: new Date().toLocaleDateString().substr(0, 10).replaceAll("/", "-"),
        time: new Date().toLocaleTimeString()
    },

    methods:{
        today(){
           const oggi = new Date().toLocaleDateString().substr(0, 10).replaceAll("/", "-")
           return oggi
        }

        
    }
});