/* Example 1 */
(function IIFE(){
  console.log('Example 1');
})();

/* Example 2 */
(function IIFE(){
  console.log('Example 2');
}());

/* Example 3 */
(function IIFE(arg){
  console.log(arg);
})('Example 3');

/* Example 4 */
var b = 2;
(function IIFE(test){
  test(b);
})(function test(arg){
  var a = 3;
  console.log(a); //3
  console.log(arg); //2
});