
//Q1
const num = ()=>{
    for(let i = 1;i<=100;i++){
        if(i%2 === 0){
            console.log(i); 
        }
    }
}

num();

//Q2.ans 
function calculate(num1, num2, operation) {
    let result;
    
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    
    return result;
}


console.log(calculate(10, 5, 'add'));        // Output: 15
console.log(calculate(10, 5, 'subtract'));   // Output: 5
console.log(calculate(10, 5, 'multiply'));   // Output: 50
console.log(calculate(10, 5, 'divide'));     // Output: 2


//Q3ans:-
function findTax(salary) {
    let taxRate;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            return 'Invalid salary';
    }
    
    return salary * taxRate;
}

// Example usage:
console.log(findTax(400000));   // Output: 0 (0% tax on salary <= 500000)
console.log(findTax(600000));   // Output: 60000 (10% tax on salary > 500000 and <= 1000000)
console.log(findTax(1200000));  // Output: 240000 (20% tax on salary > 1000000 and <= 1500000)
console.log(findTax(2000000));  // Output: 600000 (30% tax on salary>1500000)


//Q4
function sumOfProducts(n1, n2) {
    const num1Str = n1.toString();
    const num2Str = n2.toString();
  
    let sum = 0;
    for (let i = 0; i < Math.min(num1Str.length, num2Str.length); i++) {
     
        const digit1 = parseInt(num1Str[i]);
        const digit2 = parseInt(num2Str[i]);
      m
        sum += digit1 * digit2;
    }
    
    return sum;
}
