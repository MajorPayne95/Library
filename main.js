let myLibrary = [];

function Book(title,author,pages,status, position) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.position = position;
  this.remove = false;
}

function addBookToLibrary() {
// Stores the UI values as variables, makes a new book using the Book f constructor, and pushes that book to the myLibrary array
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status;
// this checks which radio button for book read status was selected
  if (document.getElementById('read').checked) {
    status = document.getElementById("read").value;
  } else if (document.getElementById('unread').checked) {
    status = document.getElementById("unread").value;
  }
// this prevents an empty book from being entered
  if (title == "" || author == "") {
    alert("Please fill out entire form")
    return;
  }
// generates a position value to be used to identify each book added
  let position = myLibrary.length + 1;
// Created a new book using the above variables
  let book = new Book(title, author, pages, status, position);
// Pushes newly created book to myLibrary array
  myLibrary.push(book);
// Runs the bookElements function to get book to interface
  bookElements(book);
}

// This is a master function that runs each small function to get the entered data to the DOM
function bookElements(book) {
  bookDiv(book);
  bookList(book);
  bookTitle(book);
  bookAuthor(book);
  bookPages(book);
  //bookStatus(book);
  statusToggle(book);
  removeBtn(book);
}
// This function generates a new div for the books data to be pushed to
function bookDiv(book) {
  let count = book.position
  let currDiv = document.createElement('div');
  currDiv.className = ("book" + count);
  document.querySelector(".bookshelf").appendChild(currDiv); // This line appends the created div to the already existing .bookshelf element
}
// This function generates a new ul for each books li elements to go in
function bookList(book) {
  let count = book.position
  let currList = document.createElement('ul');
  currList.className = ('bookInfo' + count);
  document.querySelector(".book" + count).appendChild(currList);
}
// The below functions generate an li element for each input variable the user submitted
function bookTitle(book) {
  let count = book.position
  let bookTitle = document.createElement('li');
  let currTitle = document.createTextNode('Title: ' + book.title);
  bookTitle.appendChild(currTitle)
  document.querySelector(".bookInfo" + count).appendChild(bookTitle);
}

function bookAuthor(book) {
  let count = book.position
  let bookAuthor = document.createElement('li');
  let currAuthor = document.createTextNode('Author: ' + book.author);
  bookAuthor.appendChild(currAuthor)
  document.querySelector(".bookInfo" + count).appendChild(bookAuthor);
}

function bookPages(book) {
  let count = book.position
  let bookPages = document.createElement('li');
  let currPages = document.createTextNode('Page count: ' + book.pages);
  bookPages.appendChild(currPages)
  document.querySelector(".bookInfo" + count).appendChild(bookPages);
}
// end of user input DOM generation functions

//function that creates a delete input on each book
function removeBtn(book) {
  let count = book.position;
  let removeBook = document.createElement('button');
  removeBook.innerText = 'Remove book';
  removeBook.className = ('removeBtn')
  document.querySelector('.book' + count).appendChild(removeBook);
}
// Function that creates a read/unread toggle for the user to dynamically change a given books status
function statusToggle(book) {
  let count = book.position;
  let status = book.status
  let readUnread = document.createElement('button');
  readUnread.innerText = status;
  readUnread.className = ('statusToggle' + count)
  document.querySelector('.book' + count).appendChild(readUnread);
}
// Assigns a DOM element to a usable variable to be used for a click event
const divElement = document.querySelector(".bookshelf");
divElement.addEventListener('click', deleteBook);
// Function that runs when a Remove Book button is pressed
function deleteBook(e) {
  if(!e.target.classList.contains('removeBtn')) { // this ignores all clicks that don't contain the .removeBtn class 
    return;
  } else {
    console.log('remove clicked');
    // When .removeBtn class is detected this sets its value to a variable and removes the nearest div, which is always the container of the given book
    let btn = e.target;
    btn.closest("div").remove();
  }
}
// Uses the same div variable to create another click event for read/unread status
divElement.addEventListener('click', changeStatus);
// This function sets the clicked button to a variable that is then checked for a read/unread DOM text
function changeStatus(e) { 
  let current = e.target
  // This sets the clicked read/unread buttons text to the opposite value
  if (current.innerText == "Read") {
    current.innerText = "Unread"
  } else if (current.innerText == "Unread") {
    current.innerText = "Read"
  }
}

// Functionality to form button for submitting info
const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeForm");
const form = document.getElementById("form");

form.addEventListener('submit', e => {
   e.preventDefault();
})

openBtn.addEventListener("click", () => {
  form.classList.add("open");
})

closeBtn.addEventListener("click", () => {
  form.classList.remove("open");
  console.log("clicked!")
  addBookToLibrary();
})