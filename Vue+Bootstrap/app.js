const mathprobarray = new Array("1x1=", "2x2=", "3x3=", "4x4=", "5x5=", "6x6=", "7x7=", "8x8=");
var app = new Vue({
    el: '#app',
    data() {
        return {
            // problem: "hello"
            mathprob: "hi"
        };
    },
    methods: {
        submit() {
            console.log(this.input);
            // if (this.input == answerarray[x])
            // {
            //     status: 
            // }
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        generateProblem() {
            let x = getrandomint(mathprobarray.length)
            console.log(x)
            return mathprobarray[x];

        }
        
    }
});