function outer() {
    const x = 4;
    function parent() {

        const y = 5;
        function add() {
            console.log(x + y);
            return add
        }
        return add
    }
    return parent()
}
const add2 = outer()
console.dir(add2);