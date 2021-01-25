//Array that scores all the books
let myLibrary= [{bookName:"der steppenwolf", author: "hermann hesse"}, {bookName: "underground", author:"dostoyevski"}];
//The object constructor
function Book(bookName, author) {
    this.bookName= bookName,
    this.author= author
  }
  //The function that adds books to the myLibrary array
  function addBookToLibrary() {
// get the user input 
let getBooks= document.getElementById("bookName").value;
let getAuthor= document.getElementById("author").value;
//create object(s) from Book prototype
let bookInput= Object.create(Book);
//the user input will be object's values
bookInput.bookName= getBooks;
bookInput.author= getAuthor;
//push the objects into the array
myLibrary.push(bookInput);
//console log to check the library
console.log(myLibrary);
//a functin that takes the user input and turns it into a table
function displayBook(){
  //display the new book on a paragraph
  let para = document.getElementById("para");
      para.textContent=getBooks + " "+ getAuthor;
    //create table
  var table = document.createElement("table");
      document.body.appendChild(table);
    // var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
      cell1.textContent = getBooks;
      cell2.innerHTML = getAuthor;
};
//call the book adding function
displayBook();

//empty the user input field
document.getElementById("bookName").value=" ";
document.getElementById("author").value=" ";
  }



 

//loop through the array
function loopArr(){
  myLibrary.forEach((element,index)=>{
      console.log(element.bookName); // 100, 200, 300
      console.log(element.author);
      console.log(index); // 0, 1, 2
      // write the new book on paragraph
      let para = document.getElementById("para");
      para.textContent=element.bookName + " "+ element.author;
      //create table
      var table = document.createElement("table");
      document.body.appendChild(table);
      // var table = document.getElementById("myTable");
       var row = table.insertRow(0);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       cell1.textContent = element.bookName;
       cell2.innerHTML = element.author;
     
  });
  }
//display the table, this will be deleted soon, it's only an example 
  function myFunction() {
    var table = document.createElement("table");
    document.body.appendChild(table);
    // var table = document.getElementById("myTable");
     var row = table.insertRow(0);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = "NEW CELL1";
     cell2.innerHTML = "NEW CELL2";
   }