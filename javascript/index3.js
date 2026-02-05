function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let a = 0;
    let b = 1;
    let fibSeries = [0, 1];
    
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fibSeries;
    } else {
        while (fibSeries.length < n) {
            let nextTerm = a + b;
            fibSeries.push(nextTerm)
            
            a = b;
            b = nextTerm;
        }
        return fibSeries;
    }
    
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(2));
