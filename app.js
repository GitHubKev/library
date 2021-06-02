let library = [
    {
        "title": "The Fifth Vital",
        "author": "Mike Maljak",
        "pages": 300,
        "read": "Read"
    },
    {
        "title": "Harry Potter",
        "author": "J.K Rowling",
        "pages": 500,
        "read": "Not Read Yet"
    },
    {
        "title": "How To Win Friends and Infuence People",
        "author": "Dale Carnegie",
        "pages": 260,
        "read": "Not Read Yet"
    }
];

const row = document.querySelector(".row") // selects the div with class name of "row"

//displaying books in a card element
library.forEach((book)=> {
    let column = document.createElement("div") //creating the div element and adding a class name of "column"
    column.classList.add("column")

    let card = document.createElement("div") //creating the div element and adding a class name of "card"
    card.classList.add("card")

    row.appendChild(column) //the row div appends the column element
    column.appendChild(card) // the column div appends the card element

    let bookTitle = document.createElement("h3") //create an h3 element and making its textContent the book title
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement("p") //create a p element and making its textContent the book author
    bookAuthor.textContent = book.author; 

    let bookPages = document.createElement("p") //create a p element and making its textContent the page number
    bookPages.textContent = book.pages + " pages";

    let bookRead = document.createElement("p") //create a p element and making its textContent book read status
    bookRead.textContent = book.read

    let removeBook = document.createElement("button") //create a button element with class name of "remove-btn"
    removeBook.classList.add("remove-btn")
    removeBook.textContent = "Remove" // button says remove 

    card.append(bookTitle, bookAuthor, bookPages, bookRead, removeBook) 
    //book.title + " by " + book.author + " " + book.pages + " pages " + book.read;
})

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
    // this.info = function (){
    //     return title + " by " + author + " , " + pages + " pages, " + this.read;
    // }
}

Book.prototype.info = function(){
    return this.title + " by " + author + " , " + pages + " pages, " + this.read;
}

function addBookToLibrary(){
    for(let i=0; i<library.length; i++){
    }
}

const newBookButton = document.querySelector(".new-book-button")
const cancelButton = document.querySelector(".cancel-btn")
const removeButton = document.querySelectorAll(".remove-btn")

newBookButton.addEventListener("click", newBookForm)
cancelButton.addEventListener("click", closeForm)


function newBookForm(){
    document.querySelector(".book-form-container").style.display = "block"
}

function closeForm(){
    document.querySelector(".book-form-container").style.display = "none"
}

removeButton.forEach((remove) =>{
    remove.addEventListener("click", removeBook)
})

function removeBook(){
    alert("removed")
}