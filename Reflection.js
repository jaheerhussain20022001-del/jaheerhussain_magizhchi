const product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

const handler={
    get(target,property,receiver){
        console.log('READ operation: ${property}');
        return Reflect.get(target,property,receiver);
    },
    set(target,property,value,receiver){
        console.log('WRITE operation: ${property}= ${value}');
        return Reflect.set(target,property,value,receiver);
    }
};

const productProxy = new Proxy(product, handler)

console.log(Reflect.get(productProxy,"name"));
console.log(Reflect.get(productProxy,"price"));

Reflect.set(productProxy,"price", 55000);
Reflect.set(productProxy, "stock", 8);

console.log(Reflect.get(productProxy,"price"));
