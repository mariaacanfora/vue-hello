Vue.config.devtools = true;

const vueApp = new Vue({
    el: '#root',
    data: {
        myName: "Maria",
        today: new Date().toLocaleDateString().substr(0, 10).replaceAll("/", "-"),
        time: new Date().toLocaleTimeString(),
        srcImg: "https://www.atuttodonna.it/atuttodonna/wp-content/uploads/2020/04/immagini-felicit%C3%A0.jpg",
        altImg: "face smile"
    },
});