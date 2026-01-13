const inputUsername=document.querySelector('#username')
const paragraph=document.querySelector('p')
const form=document.querySelector('form')
// inputUsername.addEventListener('click', ()=>{
//     console.log('input clicked');
// })
// inputUsername.addEventListener('dblclick', ()=>{
//     console.log(' double input clicked');
// })
// let inputValue
// inputUsername.addEventListener('input', (e)=>{
//     console.log(e.target.value);
//     inputValue=e.target.value

//     paragraph.innerText=e.target.value
//     console.log(' input value changed');
// })
// inputUsername.addEventListener('change', (e)=>{
//     console.log(e.target.value);
//     inputValue=e.target.value

//     paragraph.innerText=e.target.value
//     console.log(' input value changed');
// })
// inputUsername.addEventListener('focus', (e)=>{
//     console.log(e,type);
//     inputValue=e.target.value

//     paragraph.innerText=e.target.value
// })
// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log(e.formData);
// })
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const myFormData= new FormData(form)
    console.log(myFormData);
    console.log(myFormData.entries());

    for (const p of myFormData.entries()){
        console.log(p);
    }
})