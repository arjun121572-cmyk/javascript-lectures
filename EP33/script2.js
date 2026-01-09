// debugger
// `use strict`
function parentFun() {
    const x = 10;
    const y = 20;
    const z = 40;
    const username = `Arjun`
    console.log(x + y);
    console.log(username);

    function childFun() {
        const username1 = `Mahir`;
        console.log(z);
if(true){
    
    var num1=12;
     var num2=13;
    // console.log(num1);
    console.log(num2);

}
// console.log(num2)
        function grandchild() {
            const username = `Arman`;
            console.log(username1);

        }
        grandchild()
    }
    childFun()
}
console.log(num2)

parentFun()