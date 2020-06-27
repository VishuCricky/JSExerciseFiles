// add the elements of an existing array into a new array
let certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries'];
let certifications = ['Responsive Web Design','Block Chain',...certsToAdd,'Functions'];

console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x,y,z) {
  return x+y+z;
}
let args = [1,2,3,4];
console.log(addThreeNumbers(...args));

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);

// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);