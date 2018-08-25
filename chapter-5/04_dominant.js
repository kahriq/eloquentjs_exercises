//DOMINANT WRITING DIRECTION

/*
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/


//Import scripts file with Unicode data
require('./scripts.js');

//characterScript() takes a character as a parameter and returns an object from SCRIPTS that matches the parameter's character code
function characterScript(code) {
  for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
          return code >= from && code < to;
      })) {
          return script;
      }
  }
  return null;
}

//countBy() takes a string as a parameter and returns an array of objects that list all the directions the text in the string is written in and the number of characters for each direction
function countBy(text, callback) {
let counts = [];
  for (let char of text) {
      let direction = callback(char);
      let known = counts.findIndex(c => c.direction == direction);
      if (known == -1) {
          counts.push({direction, count: 1});
      } else {
          counts[known].count++;
      }
  }
  return counts;
}

//dominantDirection() takes a string as a parameter, manipulates the array produced by countBy() and characterScript(), and returns the direction property of the resulting object
function dominantDirection(text) {
   let scripts = countBy(text, char => {
       let script = characterScript(char.codePointAt(0));
       return script ? script.direction : "none";
   }).filter(({direction}) => direction != "none");

   return scripts.reduce( (accum,val) => {
       if(val.count > accum.count) return accum = val;
   } ).direction;
}


//Print to console

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl