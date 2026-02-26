function createCounter(initialNumber){
    let counter = initialNumber;

    return function(){
        counter++;
        return counter;
    };
}

const myCounter = createCounter(0);

console.log(myCounter());//1
console.log(myCounter());//2
console.log(myCounter());//3
console.log(myCounter());//4
