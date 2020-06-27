var arr = [
  'learn JS!',
  42,
  true
];

arr[0]; // 'learn JS!'
arr[1]; // 42
arr[2]; // true
arr.length; // 3

typeof arr; // "object"

/* Example 2 */
function foo(){
  var newArr = Array.prototype.slice.call(arguments);
  newArr.push("boom");
  //console.dir("newArr : "+ JSON.stringify(newArr));
  return newArr;
}

var testObj = foo("baz","chill");

console.log("typeof testObj : "+ typeof testObj);
console.dir("testObj : "+ JSON.stringify(testObj));
