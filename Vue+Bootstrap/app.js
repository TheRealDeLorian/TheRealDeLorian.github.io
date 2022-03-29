const mathprobarray = new Array("1x1=", "2x2=", "3x3=", "4x4=", "5x5=", "6x6=", "7x7=", "8x8=");
const mathanswersheet = new Array("1", "4","9","16","25","36","49","64")
var app = new Vue({
    el: '#app',
    data() {
        return {
            mathprobs: ["1x1=", "2x2=", "3x3=", "4x4=", "5x5=", "6x6=", "7x7=", "8x8="],
            answers: ["1", "4","9","16","25","36","49","64"]
        };
    },
    methods: {
        submit() {
            console.log(this.input);
            if (this.input == mathanswersheet[x])
            {
                
            }
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
