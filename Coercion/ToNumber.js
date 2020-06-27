var a = {
  valueOf : function(){
    return "42";
  }
};

var b = {
  toString : function(){
    return "42";
  }
};

var c = [2,4];
c.toString = function(){
  return this.join("");
};

Number( a );                // 42
Number( b );                // 42
Number( c );                // 42
Number( "" );               // 0
Number( [] );               // 0
Number( [ "abc" ] );        // NaN