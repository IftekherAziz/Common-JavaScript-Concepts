function sum(a,b,c){
    console.log(arguments[4]);
    const result = a+ b+ c;
    return result;
}
// console.log(arguments);
const total = sum(1,2,3,4,5,6);
console.log(total);