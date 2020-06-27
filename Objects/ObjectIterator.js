var obj = {
  a : 2,
  b : 3
};

Object.defineProperty(obj, Symbol.iterator, {
  enumerable : false,
  writable : false,
  configurable : true,
  value : function (){
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);
    return {
      next : function (){
        return {
          value : o[ks[idx++]],
          done : (idx > ks.length)
        }
      } 
    };
  }
});

var it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
