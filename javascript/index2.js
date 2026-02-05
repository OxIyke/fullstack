function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    let randomName = Math.random() * names.length;
    let payee = names[Math.floor(randomName)];
    console.log(randomName)
    console.log(payee)
    
    return `${payee} is going to buy lunch today!`
    
    
    


/******Don't change the code below*******/    
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));