//let i=0
//debugger
// while(i<100){
//     console.log(i);
//     i++
// }
const userNames=[`Arjun`,`Bheem`,`Nakul`,`Sahadev`,`Yudhistir`,`Karn`]
let i=0
//debugger
while(i<userNames.length){
    console.log(`${i+1}.${userNames[i]}`);
    userNames[i]=userNames[i]+` Pandav`
    i++;
}
console.log(`program ended`)