function calculator(operation){
    let op = operation;

    return function(a,b){
        if(op === "add") return a + b;
        if(op === "subtract") return a - b;
        if(op === "multiply") return a * b;
        return "Invalid operation";

    };
}

const addCalc = calculator("add");
const subCalc = calculator("subtract");
const mulCalc = calculator("multiply");

console.log("Addition:", addCalc(10,5));
console.log("Subtraction:", subCalc(10,5));
console.log("Multiplication:", mulCalc(10,5));
