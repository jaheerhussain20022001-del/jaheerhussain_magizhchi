function Inject(dependency){
    return function(target,key){
        target[key] = new dependency();
    };
}