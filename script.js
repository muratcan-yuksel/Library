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
          //create table
        var table = document.createElement("table");
            document.body.appendChild(table);
          // var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //let cell3=row.insertCell(2);
            cell1.textContent = getBooks;
            cell2.innerHTML = getAuthor;
          
          // creating button element  for the read/NotRead status
        let button = document.createElement('BUTTON');     
        //create a class for these buttons
        button.className="statusButton";         
          // creating text to be displayed on button 
        let buttonText = document.createTextNode("Read"); 
        // appending text to button 
        button.appendChild(buttonText); 
        // appending button to div 
        table.appendChild(button); 
          //take the read/NotRead status and write it
          //actually this "if" is not working at all
          //the Read status comes from above, var buttonText
          //but since it works...
          if(sessionStorage.getItem("bookStatus") == "Read" || sessionStorage.getItem("bookStatus") ==  null){
            button.innerHTML= "Read";
          }else if (sessionStorage.getItem("bookStatus") == "Not Read") {
            button.innerHTML="Not Read";
          }
         
          //function that changes the books read/Notread status on click
         button.addEventListener("click", function (e){
          if (button.innerHTML= "Read"){
            button.innerHTML= "Not Read";
          }else if (button.innerHTML="Not Read"){
            button.innerHTML= "Read";
          }
         })


  //create remove button
         var removeButton = document.createElement('BUTTON');   
   // creating text to be displayed on button 
        var removeButtonText = document.createTextNode("Delete"); 
        //append the text to the button
        removeButton.appendChild(removeButtonText);
        //append remove button to table
        table.appendChild(removeButton);
            
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
            console.log(element.bookName); // 100, 200, 300
            console.log(element.author);
            console.log(index); // 0, 1, 2
            //create table
            var table = document.createElement("table");
            document.body.appendChild(table);
            // var table = document.getElementById("myTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = element.bookName;
            cell2.innerHTML = element.author;
            let cell3=row.insertCell(2);
            //A button needs to be added here 
            cell3.textContent="deneme";
          
  });
  }
//gets the read/notRead part upon change and saves it into session storage
//if the dropdown menu is left untouched, the value will be null
//so an if statement will be used while making use of this part
  function getReadStatus(sel) {
    let bookStatus1 = (sel.options[sel.selectedIndex].text);
     sessionStorage.setItem("bookStatus", bookStatus1);
    }
