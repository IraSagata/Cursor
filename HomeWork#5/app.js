//Task#1 A function which prints str after n seconds.

function printTimeout(str, seconds) {
  setTimeout(function(){ console.log(str); }, seconds * 1000);
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

//Task3 A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

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

//Task5 Implement function from task №3 (bombTimer) using recursion and setTimeout.

function bombTimer(str, time) {
  var timerId = setTimeout(function() {
      if (time > 0) {
        console.log(time);
        time = time - 1;
        bombTimer(str, time)
      } else { 
        console.log(str);  
      }
  }, 1000);
}

bombTimer('Boooom', 3);