let testInt = 345;

function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);

}

console.log(reverseInt(testInt));