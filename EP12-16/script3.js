const username = `Arjun`
const userAge = 19
if (username) {
    console.log(`Name: ${username}`);
}
if (userAge) {
    console.log(`Age: ${userAge}`);
}

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);
debugger
if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
}

else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
if(userAge>=20){
    console.log(`he is above 19`);
}else{
    console.log(`his age is not 19`);
}if(username.length>4){
    console.log(`songoku`);
}else{
    console.log(`invslid user`);
}
}
 else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
}

else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
}
else if (userAge < 0) {
    console.log(` please enter a valid age.`);
}
else {                                            //else will check all the conditions if  all them are false it will display the below the message
    console.log(` please enter a valid age.`);
}

console.log('Program Ended!!')