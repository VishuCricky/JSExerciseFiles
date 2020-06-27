// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* TIP: last is referencing the last element obj of the the same obj as chunked 
is referring to */
const testArray = [1, 2, 3, 4, 5];
const chunkArraySize = 2;

function chunk(array, size) {
  const chunked = [];

  for(let element of array){

    const last = chunked[chunked.length - 1];
    console.log("last 1: "+JSON.stringify(last));
    if(!last || last.length === size){
      chunked.push([element]);
      console.log("chunked 1: "+JSON.stringify(chunked));
    }else {
      console.log("chunked 2: "+JSON.stringify(chunked));
      last.push(element);
      console.log("last 2: "+JSON.stringify(last));
      console.log("chunked 3: "+JSON.stringify(chunked));
      
    }
    console.log("chunked 4: "+JSON.stringify(chunked));
  }
  return chunked;
}

/* function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length){
    chunked.push(array.slice(index,index+size));
    index+= size;
  }
  return chunked;
} */

console.log("chunk: "+JSON.stringify(chunk(testArray,chunkArraySize)));