const EvenNumbers=[0,2,4,6,8,89]
// const result = EvenNumbers.some((num) => {
//     debugger
//     return num>5
// })
// const result = EvenNumbers.some((num,i) => {
//     // debugger
//     if(num%2===1){
//         console.log(i);
//     }
//     return num%2===1
// })
const result = EvenNumbers.every((num,i) => {
    
    return num%2===1
})