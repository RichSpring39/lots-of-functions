
/*

function name - sayhi
perameters: nameStr - string

return string 

concatenation
inteerpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}

console.log(sayHi("Greyson"));
console.log(sayHi("Jimmy"));
console.log(sayHi("Bob"));


/*
functionName: bigstring
parameters: str1 str2


return string


if equal - don't return, just console.log that they are equal
if str1 > is greater than str2 - return str1
if str2 is greater than str1 - return str2

.length - used to determine how big each string is
*/

function bigString(str1, str2){

    if(str1.length > str2.length){
        return str1;
    }else if(str2.length > str1.length){
        return str2;
    }else if(str1.length === str2.length){
        console.log(`${str1} is equal in length to ${str2} `);
        // return; str1 && str2;

    }
}
console.log(bigString("Blue", "red"));
console.log(bigString("Fire", "water"));
console.log(bigString(`fork`, `Fear`));

// bigNumber problem
function bigNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }else if(num2 > num1){
        return num2;
    }else if(num1 === num2){
        console.log(`${num1} is equal in length to ${num2} `);

    }
}
console.log(bigNumber(24, 355));
console.log(bigNumber(240, 35));
console.log(bigNumber(240, 240));

//fiveMore
function fiveMore(numbsArray){
    for(let i = 0; i < numbsArray.length; i++){
        if(numbsArray[i] % 2 === 1){
       numbsArray[i] += 5;
        }
    }
    return numbsArray;

}

console.log(fiveMore([1,2,3,4]));
console.log(fiveMore([3,5,7,9]));
console.log(fiveMore([2,4,6,8]));

//arraySuummer
function arraySummers(arrayS){
    let sum = 0;
    for(let su = 1; su < arrayS.length; su++){
        sum += arrayS[1];
        
    }
    return sum;
}
console.log(arraySummers([2,2,2]));

//everyDivisible
function everyDivisible(n){
    for(let num = 1; num <= 100; num++){
    if(num % n === 0){
        console.log(num);
    }
    }
}
everyDivisible(7);