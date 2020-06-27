var it = foo( "http://some.url.1" );

function foo(url){
  // STATE 1
  // manage generator state
  var state;
  var val;

  function process(v){
    switch(state){
      case 1:
        console.log("requesting url :",url);
        return request( url );
      case 2:
        val = v;
        return;
      case 3:
        var err = v;
        console.log( "Oops:", err );
        return false;
    }
  }
  
  return {
    next : function (v){
      // initial state
      if(!state){
        state = 1;
        return {
          done: false,
          value: process()
        };
      }
      // yield resumed successfully
      else if(state == 1){
        state = 2;
        return {
          done: true,
          value: process(v)
        };
      }
      // generator already completed
      else {
        return {
            done: true,
            value: undefined
        };
      }
    },
    throw : function (e){
      // the only explicit error handling is in
      // state 1
      if (state == 1) {
        state = 3;
        return {
            done: true,
            value: process( e )
        };
      }
      // otherwise, an error won't be handled,
      // so just throw it right back out
      else {
        throw e;
      }
    }
  };
}