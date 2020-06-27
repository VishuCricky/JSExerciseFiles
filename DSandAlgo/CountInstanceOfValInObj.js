let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce((allNames, name) => { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames;
}, {});
console.log(countedNames);

/* let testArr = {};
testArr['Alice'] = 1;
console.log(JSON.stringify(testArr)); */
