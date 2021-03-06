let app = new Vue({
    el: "#app",
    data() {
        return {
            problems: ["1x1=", "2x2=", "3x3=", "4x4=", "5x5=", "6x6=", "7x7=", "8x8="],
            randommath: 0,
        }
    },
    methods: {
        getRandomInt() {
            let randIndex = Math.floor(Math.random() * app.problems.length);
            this.randommath = app.problems[randIndex];
        },
        window.addEventListener("load", () => {
            document.querySelector("#submit").addEventListener("click", getRandomInt)
        });

}});

// problems: ["1x1=", "2x2=", "3x3=", "4x4=", "5x5=", "6x6=", "7x7=", "8x8="],
//             answers: ["1", "4", "9", "16", "25", "36", "49", "64"]
