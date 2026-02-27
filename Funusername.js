function generataUsername(name,phone){
    const partName = name.slice(0,3);
    const partPhone = phone.slice(-2).toLowerCase();
    return (partName + partPhone).toLowerCase();
}

console.log(generataUsername("Jaheer","9629646751"));