var a = [1,2,5,7];

var it = a[Symbol.iterator]();
console.log("it.next() : "+it.next().value);
console.log("it.next() : "+it.next().value);
console.log("it.next() : "+it.next().value);


