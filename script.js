//Array that scores all the books
let myLibrary= [{bookName:"Der steppenwolf", author: "Hermann Hesse", status: "Read"}, {bookName: "Notes from the Underground", author:"Fyodor Mikhailovich Dostoevsky", status: "Not Read"}];
//use local storage to display stored data
document.addEventListener("DOMContentLoaded", function() {
  console.log(localStorage.getItem("booksData"));
  let localData = localStorage.getItem("booksData");
  localData= JSON.parse(localData);
  myLibrary=localData;
});
//The object constructor
function Book(bookName, author, status) {
    this.bookName= bookName,
    this.author= author,
    this.status= status
  }
//get the table adding element
const addTable = document.querySelector("#DOMtableDiv");

  //The function that adds books to the myLibrary array
function addBookToLibrary() {
  // get the user input 
  let getBooks= document.getElementById("bookName").value;
  let getAuthor= document.getElementById("author").value;
  let getStatus= document.getElementById("BookStatus").options[document.getElementById("BookStatus").selectedIndex].text;
  //create object(s) from Book prototype
  let bookInput= Object.create(Book);
  //the user input will be object's values
    bookInput.bookName= getBooks;
    bookInput.author= getAuthor;
    bookInput.status= getStatus;
      //push the objects into the array
      myLibrary.push(bookInput);      
       //a function that takes the user input and turns it into a table
       //set local storage
       localStorage.setItem("booksData", JSON.stringify(myLibrary));
function displayBook(){                
const htmlTable = `
  <table class="u-full-width">
    <thead>
      <tr>
        <td>${getBooks}</td>
        <td>${getAuthor}</td>
        <td><button class="status-button">${"Read"}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
     </thead>
  </table>                               
              `;
tableBody.insertAdjacentHTML("afterbegin", htmlTable);
 // get the button element  for the read/NotRead status
let button = document.querySelector(".status-button");
 //take the read/NotRead status and write it
var e = document.getElementById("BookStatus");
 //the value and text examples are in the code below, let's keep it for possible further reference
//var strSel = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + e.options[e.selectedIndex].text;
//this is the dropdown value, chosen
let statusBook= e.options[e.selectedIndex].text;
  if (statusBook == "Read"){
     button.innerHTML= "Read";
  }else if (statusBook=="Not Read"){
     button.innerHTML= "Not Read";
  }
 //set attribute for swapping texts on click
button.setAttribute("data-text-swap", "Not Read");
button.setAttribute("data-text-original", "Read");
//function that changes the books read/Notread status on click
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
      }
  }, false);

function deleteButton () {
//create remove button
  var removeButton = document.querySelector(".delete"); 
    console.log(removeButton.parentNode.parentNode);
     //add an event listener to the delete button
      removeButton.addEventListener("click", initRemoveButton, false);
        //delete its parent element 
          function initRemoveButton(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
              //find the index that contains the book name and author related to the delete button
              //the difference here from the above function is element.bookName or author
                index= myLibrary.findIndex(obj=> obj.bookName === element.bookName && obj.author === element.author);
                  //remove that index
                    myLibrary.splice(index,1);
                       //update the local storage 
                        localStorage.setItem("booksData", JSON.stringify(myLibrary));
      }
   };
//call delete button function
deleteButton();      
      };
//call the book adding function
displayBook();
  //empty the user input field
      document.getElementById("bookName").value=" ";
      document.getElementById("author").value=" ";
  }
//loop through the array and display the books as table
function loopArr(){
  myLibrary.forEach((element,index)=>{
    const htmlTable = `
      <table class="u-full-width">
        <thead>
          <tr>
            <td>${element.bookName}</td>
            <td>${element.author}</td>
            <td><button class="status-button">${"Read"}</button></td>
            <td><button class="delete">delete</button></td>
          </tr>
        </thead>
      </table>            
    `;
tableBody.insertAdjacentHTML("afterbegin", htmlTable);      
  // creating button element  for the read/NotRead status
  let button = document.querySelector(".status-button");      
   //set attribute for swapping texts on click
      button.setAttribute("data-text-swap", "Not Read");
      button.setAttribute("data-text-original", "Read");
   //function that changes the books read/Notread status on click
      button.addEventListener('click', function() {
        if (button.getAttribute("data-text-swap") == button.innerHTML) {
          button.innerHTML = button.getAttribute("data-text-original");
        } else {
          button.setAttribute("data-text-original", button.innerHTML);
          button.innerHTML = button.getAttribute("data-text-swap");
            }
    }, false);
    function deleteButton () {
      //create remove button
        var removeButton = document.querySelector(".delete"); 
          console.log(removeButton.parentNode.parentNode);
           //add an event listener to the delete button
            removeButton.addEventListener("click", initRemoveButton, false);
              //delete its parent element 
                  function initRemoveButton(){
                      this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                       //find the index that contains the book name and author related to the delete button
                       //the difference here from the above function is elemen.bookName or author
                          index= myLibrary.findIndex(obj=> obj.bookName === element.bookName && obj.author === element.author);
                            //remove that index
                            myLibrary.splice(index,1);
                               //update the local storage 
                                  localStorage.setItem("booksData", JSON.stringify(myLibrary));
                    }
             };
//call delete button function
 deleteButton();
          
          
  });
  }

