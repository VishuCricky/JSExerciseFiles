// friends - an array of objects 
// where object field "books" is a list of favorite books 
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue

let booksList = friends.reduce((acc,obj)=>{
  return [...acc,...obj.books]
},['Sherlock Holmes']);

console.log("booksList: "+JSON.stringify(booksList));