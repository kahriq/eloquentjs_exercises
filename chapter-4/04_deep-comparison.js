//DEEP COMPARISON

/*
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
*/


//areEqual() returns true if both parameters are equal and runs deepEqual() if they are objects
function areEqual(obj1,obj2) {
    return deepEqual(obj1,obj2) || obj1 === obj2;
}

//isObject() determines if the parameter is an object that doesn't have a null value
function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}

//areObjects() returns true if both parameters are objects
function areObjects(obj1,obj2) {
    return isObject(obj1) && isObject(obj2);
}

//if parameters are objects, equalProp() checks the length of each and returns false if they are different. If they are the same length, function then iterates through one of the objects and returns false if any of its properties or the values of those properties are not equal to the second object.
function equalProp(obj1,obj2) {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let prop in obj1) {
            if (!obj2.hasOwnProperty(prop) || !areEqual(obj1[prop],obj2[prop])) return false;
        }
        return true;
    } else {
        return false;
    }
} 

//deepEqual() runs equalProp() if they are objects
function deepEqual(obj1,obj2) {
    return  areObjects(obj1,obj2) && equalProp(obj1,obj2);
}


//Print to console to test
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true