/////pow  function
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
//      alert( pow(8, 2) ); 
////////////////////with recursion
// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert( pow(2, 3) );
////////////////////////////////factorial
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(5) ); 
//fibunachi
        //1.
        // var fib = function (n) {
        //     if (n === 1) {
        //         return [0, 1];
        //     }
        //     else {
        //         var s = fib(n - 1);
        //         s.push(s[s.length - 1] + s[s.length - 2]);
        //         return s;
        //     }
        // };
        // console.log(fib(10));////[]
        //2.
        function fib(n) {
            return n <= 1 ? n : fib(n - 1) + fib(n - 2);
          }
          
          alert( fib(3) ); 
          alert( fib(7) ); 
       

/////////////////////////////////tasks
//1.Суммируйте все числа до заданного
//2.Write a JavaScript program to
// compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
