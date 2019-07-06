// 1 Build a function that does currency converter from USD to UAH (1 USD = 8 UAH)

function convert(amount) { 
  return amount * 8;
}
var usd = 5;

console.log("#1");
console.log(usd +  " USD" + " = " + convert(usd) + " UAH");

// 2 A function which returns reversed string.

function reverse(str) {
  var reversedString = ''; 

  for (var i = str.length; i > 0; i=i-1 ) {    
    reversedString += str[i-1];
  }  

  return reversedString;
}

var myString = 'abcd';
console.log("my string [" + myString + "], reverse [" + reverse(myString) + "]");

// 3 A function which prints the stair picture of size n

function printStairs(length) { 
  for (var i = 1; i <= length; i++ ) 
    console.log ("#".repeat(i)); 
}

printStairs(3);

//4 A function which returns total sum of a range

function sumRange(start, end) {
  let total = 0;

  for (i = 0;start+i<=end;i = i + 1)
    total = total + (start + i);
    
  return total;
}

console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5

//4 (another version)

function sumRange(start, end) {
  if (start <= end)
    return end*(end+1)/2 - start*(start-1)/2;
  else
    return 0;
}

console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5


//5 Write a function which returns the smallest of three numbers.

function min(a, b, c) {
  var minValue = c;
  if (a < b && a < c) minValue = a;
  if (b < a && b < c) minValue = b;
  return minValue;
}

console.log(min(10, 5, 11)) // 5
console.log(min(3, 8, 4)) // 3



//6 A function which prints the pyramid picture of size n

function printPyramid(n) {
    for ( i = 0; i < n; i++) {
        let stars = "#".repeat(i * 2 + 1);
        let emptySpace = " ".repeat(n - (i + 1));
        
        console.log(emptySpace + stars);
    } 
}
printPyramid(3)
