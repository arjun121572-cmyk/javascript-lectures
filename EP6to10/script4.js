const userAge = 15;
const isSchoolStudent =(userAge >= 14) && (userAge<=42)
const isCollegeStudent = (userAge >= 18) && (userAge<=42)
const isStudent = isSchoolStudent || isCollegeStudent;
const and= (0&&1)
const or=(0||1)
const andresult= `` && `hello`
const orresult=  `` || `hello`

const andresult2= `hello` &&  null
const orresult2=  `hello` || null

const andResult3= `hello` && 7+9
const orResult3= undefined || 7+9

const andResult4= `hello` && console.log(`hello`);
const orResult4= undefined || console.log(`hello`);