let myLibrary= [{bookName: "notes from the underground", author:"dostoevsky"}, {bookName:"der steppenwolf", author:"hermann hesse"}];

function Book(bookName, author) {
    // the constructor...
    this.bookName= bookName,
    this.author= author
  }
  
  function addBookToLibrary() {
    // get the user input 
let getBooks= document.getElementById("bookName").value;
let getAuthor= document.getElementById("author").value;
//create object(s) from Book prototype
let bookInput= Object.create(Book);
//the user input will be object's values
bookInput.bookName= getBooks;
bookInput.author= getAuthor;
//console log to check performance
console.log(bookInput.bookName);
console.log(bookInput.author);
console.log(bookInput);
//push the objects into the array
myLibrary.push(bookInput);
//empty the user input field
document.getElementById("bookName").value=" ";
document.getElementById("author").value=" ";
//check if the library array is sound= Yes, it is.
console.log(myLibrary);

  }
  
  function listBooks(){
      
  }