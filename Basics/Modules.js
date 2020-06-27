var foo = (function learnModule(id){
  function change(){
    publicAPI.identify = identify2;
  }
  function indentify1(){
    console.log(id);
  }

  function indentify1(){
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change : change,
    identify: indentify1
  };
  return {
    doSomething : doSomething,
    doAnother : doAnother
  }
})('foo module');



foo.identify(); // 'foo module'
foo.change();
foo.identify2(); // 'FOO MODULE'

/* Example 2 */
