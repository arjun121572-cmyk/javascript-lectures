const message= `hello world!`
const tempMessage = `   hi my name is arjun     `
const finalMessage = tempMessage.trim()
const finalMessagetrim = tempMessage.trim().toUpperCase()
const capmMssage= message.toUpperCase()
const replaceMessage=finalMessage.replace(`hi`,`hello`)
const lastFourDigits = `6789`
const maskedAccountNumber = lastFourDigits.padStart(16, '*')
const capitalMessage = message.toUpperCase()
const bankBalance = 9873
const tempLatestring = `last four digit of account number is`
const tempconcate =tempLatestring.concat( ` `,lastFourDigits)
const templatestr= `my acccount number isb ${lastFourDigits.padStart(16,`*`)}`;
const templateString2 = `I have ₹${bankBalance} in my account.`

const addedString = 'I have ₹' + bankBalance + ' in my account.'