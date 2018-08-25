//THE SUM OF A RANGE 

/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


//range() 
function range(start,end) {
  let array = [];
  
  if (start > end) {
    
    for(let i = start; i >= end ; i--) {
      array.push(i);
    }
  
  } else {
    
    for(let i = start; i <= end ; i++) {
      array.push(i);
    }

  }

  return array;
}

//range() with optional step parameter
function range2(start,end,step = 1) {
  let array = [];
  
  if (start > end) {
    
    for(let i = start; i >= end ; i -= Math.abs(step)) {
      array.push(i);
    }
  
  } else {
    
    for(let i = start; i <= end ; i += Math.abs(step)) {
      array.push(i);
    }

  }

  return array;
}

//sum() using for in loop
function sum(numbers) {
  let accum = 0;
  for (let number in numbers) {
    accum += Number(numbers[number]);
  }
  return accum;
}

//sum() using for loop
function sum2(numbers) {
  let accum = 0;
  for (let i = 0 ; i < numbers.length ; i++) {
    accum += Number(numbers[i]);
  }
  return accum;
}


//Print to console

console.log("range() results are...");
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5,2,-1));
// → [5, 4, 3, 2]

console.log("\n");

console.log("range2() results are...");
console.log(range2(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range2(5,2,-1));
// → [5, 4, 3, 2]

console.log("\n");

console.log("sum() result is...");
console.log(sum(range(1, 10)));
// → 55

console.log("\n");

console.log("sum2() result is...");
console.log(sum2(range(1, 10)));
// → 55