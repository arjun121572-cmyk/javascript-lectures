const fruitbasket=["Apple","Watermelon","melon","Bananna","Mango"]
// const fruits1=fruits[1]
// const fruits2=fruits[2]
// const fruits3=fruits[3]
// const fruits4=fruits[4]
  const[fruit1,fruit2,fruit3,fruit4,]=fruitbasket
//  console.log(fruit3);
//  const[,,fruit3]=fruitbasket

// const{3:fruit4}=fruitbasket
// console.log(fruit4);
//destruct array function
function fruits([fruit1,fruit2]){
console.log([fruit1,fruit2]);
}
fruits(fruitbasket)


 
// const username={
//     name: 'Arjun ',
//     age: 18,
//     address:{
//         city:"Amritsar",
//         pincode:143001,
//     }
// }
// const{name:perosname,age:userage}=username
// // const{address:{city}}=username
// // console.log(address);
// function userintro({name,age}){
//     console.log(name,age);

// }