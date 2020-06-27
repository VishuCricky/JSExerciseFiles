 /* Example 1: Lexical This
 The short explanation is that arrow functions do not behave at all 
 like normal functions when it comes to their this binding. 
 They discard all the normal rules for this binding, and 
 instead take on the this value of their immediate lexical enclosing scope, 
 whatever it is. */

 var obj = {
  count: 0,
  cool: function coolFn() {
      if (this.count < 1) {
          setTimeout( () => { // arrow-function ftw?
              this.count++;
              console.log( "awesome?" );
          }, 100 );
      }
  }
};

obj.cool(); // awesome?




/* Example 2: Better Approach insteading of using the above*/
var obj = {
  count : 0,
  cool : function coolFn(){
    if(this.count < 1){
      setTimeout(function time(){
        this.count++;
        console.log('more awesome');
      }.bind(this),100);
    }
  }

};

obj.cool(); // more awesome