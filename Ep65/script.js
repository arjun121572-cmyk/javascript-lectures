const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click',(e)=>{
//  e.stopPropagation()

    console.log("6.windowclicked");
},{capture: true})
document.addEventListener('click',(e)=>{
    console.log("5.document clicked");
},{capture: true})
document.body.addEventListener('click',(e)=>{
    console.log("4.body clicked");
},{capture: true})
green.addEventListener('click',(e)=>{
    // e.stopPropagation()

    console.log("3.green clicked");
},{capture: true})
pink.addEventListener('click',(e)=>{
    console.log("2.pink clicked");
},{capture: true})
 blue.addEventListener('click',(e)=>{
    
     console.log("1.blue clicked");
 },{capture: true})