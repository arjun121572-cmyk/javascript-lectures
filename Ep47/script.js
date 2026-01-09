const arr1=[2,4,5,6,7]
const arr2=[2,47,9,8,7]
const joinedarr=[...arr1,...arr2]
const myname=`Arjun`
const user={
    name: "Arjun",
    roll:24,
    address:"punjab"
}
const user2={...user,...arr1,...arr2,...myname}
console.log(user2);





function add(){
    console.log(arguments);
    let sum=0
    for( let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}