var fulfilledTh = {
  then : function(cb){
    cb(42);
  }
};

var rejectedTh = {
  then : function(cb,errCb){
    errCb("Oops");
  }
};

var p1 = Promise.resolve(fulfilledTh);
var p2 = Promise.resolve(rejectedTh);

// `p1` will be a fulfilled promise
// `p2` will be a rejected promise