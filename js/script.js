let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToArray() {
  let title = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = document.getElementById("number_of_pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  return myLibrary.push(newBook);
}
