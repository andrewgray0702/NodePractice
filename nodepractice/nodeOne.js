module.exports.randomNum = function randomNum(x ,y){
    if(y > x){
        return Math.floor(Math.random() * y) + x;
    }
    return Math.floor(Math.random() * x) + y;
}
