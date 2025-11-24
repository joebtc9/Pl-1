// sort 

let numA= prompt("Ingresa el primer número");
let numB= prompt("Ingresa el segundo número");
let numC= prompt("Ingresa el tercer número");

const arr = [numA, numB, numC];
function comparar(a,b) { 
    return a-b
}
console.log("Así queda el ordenamiento : ", arr.sort(comparar));