//Task#1 A function which prints str after n seconds.
//1
function myFunction() {
    setTimeout(function(){ console.log("Hello"); }, 5000);
    return myFunction
  }
  myFunction()
//2
  function printTimeout(str, n) {
    let secondIntoMilisecond = n * 1000;

     setTimeout(function(){ console.log(str); }, secondIntoMilisecond);

    return printTimeout
  }
  printTimeout('Hello', 5)
//Task#2 A function which returns sum of all numbers from 1 to n using recursion.
  function sumAll(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }
  
  console.log(sumAll(2))
  console.log(sumAll(4))

//Task#4 A function which returns factorial of number using recursion.
var factorial = function(n) {
  if(n == 0) {
      return 1
  } else {
      return n * factorial(n - 1);
  }
}
 
console.log(factorial(3));
console.log(factorial(5));
//Task3


function bombTimer(str, time) {
  var timerId = setInterval(function() {
      if (time > 0) {
        console.log(time);
        time = time - 1;
      } else { 
        console.log(str);  
        clearInterval(timerId);
      }
  }, 1000);
}

bombTimer('Boooom', 3);
/*3
2
1
Boooom*/
  