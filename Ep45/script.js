// function add(){
//     let sum=0
//     for(i=0;i<arguments.length;i++){
//     console.log(arguments[i]);
//     sum+=arguments[i]}
//     return sum
// }
function add() {
    let array = Array.from(arguments);
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}