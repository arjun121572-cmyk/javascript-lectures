const Name=[`Arjun`,`Sharma`]
// const myName= Name;
// myName.push(`good boy`)
// myName.push(`6,2`)
const fruits=[]
Object.assign(fruits,Name)





// object
const userName={
    personName:'Mahir',
    surName: 'Dutta',
    pata:{
    address:`holy city`,
    pinCode:143001,
    City:`Amritsar`
    },
    subject: ['Physics', 'CS', 'Maths']
}
// const userName2=userName
// userName.surName=`Singh`
// Shallow Copy
const userName2={...userName}
// Object.assign(userName2,userName)