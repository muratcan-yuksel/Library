//Array that scores all the books
let myLibrary= [{bookName:"Der steppenwolf", author: "Hermann Hesse"}, {bookName: "Notes from the Underground", author:"Fyodor Mikhailovich Dostoevsky"}];
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
                    
              table.appendChild(button); 
                //take the read/NotRead status and write it
                var e = document.getElementById("BookStatus");
                //the value and text examples are in the code below, let's keep it for possible further reference
                //var strSel = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + e.options[e.selectedIndex].text;
              // alert(strSel);
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
              var removeButton = document.createElement('BUTTON');   
        // creating text to be displayed on button 
              var removeButtonText = document.createTextNode("Delete"); 
              //append the text to the button
              removeButton.appendChild(removeButtonText);
              //append remove button to table
              table.appendChild(removeButton);
                //add an event listener to the delete button
              removeButton.addEventListener("click", initRemoveButton, false);
              //delete its parent element 
              function initRemoveButton(){
                this.parentNode.parentNode.removeChild(this.parentNode);
                //find the index that contains the book name and author related to the delete button
              index= myLibrary.findIndex(obj=> obj.bookName === getBooks && obj.author === getAuthor);
                //remove that index
              myLibrary.splice(index,1);
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
     //get the table DİV
    const tableDiv = document.getElementById("DOMtableDiv");
          myLibrary.forEach((element,index)=>{
            //create table
            var table = document.createElement("table");
            tableDiv.appendChild(table);
            // var table = document.getElementById("myTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
          
            
            cell1.textContent = element.bookName;
            cell2.innerHTML = element.author;
           

            
                // creating button element  for the read/NotRead status
                let button = document.createElement('BUTTON');     
                //create a class for these buttons
                button.className="statusButton";   
                button.textContent= "Read";  
                table.appendChild(button); 
                let cell3=row.insertCell(2);
            cell3.innerHTML="<button>Read</button>";
             
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
                        var removeButton = document.createElement('BUTTON');   
                  // creating text to be displayed on button 
                        var removeButtonText = document.createTextNode("Delete"); 
                        //append the text to the button
                        removeButton.appendChild(removeButtonText);
                        //append remove button to table
                        table.appendChild(removeButton);
                          //add an event listener to the delete button
                        removeButton.addEventListener("click", initRemoveButton, false);
                        //delete its parent element 
                        function initRemoveButton(){
                          this.parentNode.parentNode.removeChild(this.parentNode);
                          //find the index that contains the book name and author related to the delete button
                          //the difference here from the above function is elemen.bookName or author
                        index= myLibrary.findIndex(obj=> obj.bookName === element.bookName && obj.author === element.author);
                          //remove that index
                        myLibrary.splice(index,1);

                        }
          
             };
          //call delete button function
          deleteButton();
          
  });
  }
