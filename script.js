//let myLibrary= [{bookName:"der steppenwolf", author: "hermann hesse"}, {bookName: "underground", author:"dostoyevski"}];

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
//push the objects into the array
myLibrary.push(bookInput);
//empty the user input field
document.getElementById("bookName").value=" ";
document.getElementById("author").value=" ";
  }
   
  



  function listBooks(){
    let myLibrary= [{bookName:"der steppenwolf", author: "hermann hesse"}, {bookName: "underground", author:"dostoyevski"}];


    for (let i =0; i<myLibrary.length; i++) 
    {
      // console.log(`row ${i}`);
       for (let keys in myLibrary[i]) 
         {
          //console.log(` ${myLibrary[i][j]}`);
            let x = myLibrary[i][keys];
            console.log(x);
            //x is string
          
           
        }
    }
    
  }

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