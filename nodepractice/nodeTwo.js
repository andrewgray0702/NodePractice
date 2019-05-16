let randomNum = require('./nodeOne').randomNum;

let firstNum = parseInt(process.argv[2]);
let secondNum = parseInt(process.argv[3]);
if(isNaN(firstNum) || isNaN(secondNum)){
    console.log("Please Provide 2 Numbers");
} else {
    console.log(randomNum(firstNum, secondNum));
}


