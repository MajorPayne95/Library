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
  let status = document.getElementById("status").value;
  let position = myLibrary.length + 1;
  let book = new Book(title, author, pages, status, position);
  myLibrary.push(book);
  bookElements(book);
  console.log(myLibrary);
}

function bookElements(book) {
  bookDiv(book);
  bookList(book);
  bookTitle(book);
  bookAuthor(book);
  bookPages(book);
  bookStatus(book);
  removeBtn(book);
}

function bookDiv(book) {
  let count = book.position
  let currDiv = document.createElement('div');
  currDiv.className = ("book" + count);
  document.querySelector(".bookshelf").appendChild(currDiv);
}

function bookList(book) {
  let count = book.position
  let currList = document.createElement('ul');
  currList.className = ('bookInfo' + count);
  document.querySelector(".book" + count).appendChild(currList);
}

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
  let currAuthor = document.createTextNode(book.author);
  bookAuthor.appendChild(currAuthor)
  document.querySelector(".bookInfo" + count).appendChild(bookAuthor);
}

function bookPages(book) {
  let count = book.position
  let bookPages = document.createElement('li');
  let currPages = document.createTextNode(book.pages);
  bookPages.appendChild(currPages)
  document.querySelector(".bookInfo" + count).appendChild(bookPages);
}

function bookStatus(book) {
  let count = book.position
  let bookStatus = document.createElement('li');
  let currStatus = document.createTextNode(book.status);
  bookStatus.appendChild(currStatus)
  document.querySelector(".bookInfo" + count).appendChild(bookStatus);
}
//function that creates a delete input on each book
function removeBtn(book) {
  let count = book.position;
  let removeBook = document.createElement('button');
  removeBook.innerText = 'Remove book';
  removeBook.className = ('removeBtn')
  document.querySelector('.book' + count).appendChild(removeBook);
}

const divElement = document.querySelector(".bookshelf");
divElement.addEventListener('click', deleteBook);

function deleteBook(e) {
  if(!e.target.classList.contains('removeBtn')) {
    return;
  } else {
    console.log('remove clicked');
    let btn = e.target;
    btn.closest("div").remove();
  }
}

// When delete button is pressed
// Sort through myLibrary to find object with that position
// Remove that position object from myLibrary
// Copy myLibrary into dummy array
// Set myLibrary to an empty array myLibrary = []
// loop through dummy array and put each object through addBookToLibrary















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
  //console.log(form.value)
  addBookToLibrary();
})
