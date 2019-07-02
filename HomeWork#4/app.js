// 1

function convert(amount)
{ 
  return amount * 8;
}

var usd = 5;
console.log("#1");
console.log(usd +  " USD" + " = " + convert(usd) + " UAH");

// 2

function reverse(str)
{
  var rts = '';
  
  for (var i = str.length; i > 0; i=i-1 )
  {    
    rts += str[i-1];
  }  
  
  return rts;
}

var myString = 'abcd';
console.log("#2");
console.log("my string [" + myString + "], reverse [" + reverse(myString) + "]");

// 3
function print(x)
{
  var n = '';
  
  while ( x > 0 ) 
  
    n = n + '#';
    x = x - 1;
  
  return n;
}

function printStairs(n) 
{ 
  var i = 0;
  
  while ( n > i ) 
  
    i = i + 1;
    console.log ( print(i) ); 
  
}

printStairs(0);

//#
//##
//###

//4
function sumRange(start, end)
{
  let total = 0;
  for (i = 0;start+i<=end;i = i + 1)
  
    total = total + (start + i);
  
  return total;
}
console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5


function sumRange(start, end)
{
  if (start <= end)
    return end*(end+1)/2 - start*(start-1)/2;
  else
    return 0;
}
console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5


//5
function min(a, b, c) 
{
  return (a < b) ? 
                ( a < c ? a : c) 
              : ( b < c ? b : c);
  
console.log(min(10, 5, 11)) // 5
console.log(min(3, 8, 4)) // 3




//6
function printPyramid(n) 
{
    for ( i = 0; i < n; i++) {
        let a = "#".repeat(i * 2 + 1);
        let b = " ".repeat(n - (i + 1));
        console.log(b + a);
    
}
printPyramid(3)
