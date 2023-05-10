let myLibrary = [];

let submitButton = document.getElementById("submit-button");
let cardButtonRead = document.querySelector(".card-button-read");
let cardButtonDelete = document.querySelector(".card-button-delete");
let readStatusButton = document.querySelector(".read-status-button");
const addBookButton = document.querySelector(".add-book-button");
const bookContainer = document.querySelector(".book-cards");

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

function displayBook() {
  clearBookContainer();
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    createCard(book);
    changeButtonReadColor();
  }
}

function createCard(book) {
  const card = bookContainer.appendChild(document.createElement("div"));
  card.classList.add("card");

  const titleContainer = card.appendChild(document.createElement("div"));
  titleContainer.classList.add("title-container");

  const h3Card = titleContainer.appendChild(document.createElement("h3"));
  h3Card.textContent = `"${book.title}"`;

  const authorContainer = card.appendChild(document.createElement("div"));
  authorContainer.classList.add("author-container");

  const authorPara = authorContainer.appendChild(document.createElement("p"));
  authorPara.textContent = `${book.author}`;

  const bookPagesContainer = card.appendChild(document.createElement("div"));
  bookPagesContainer.classList.add("pages-container");

  const bookPagesPara = bookPagesContainer.appendChild(document.createElement("p"));
  bookPagesPara.textContent = `${book.pages} pages`;

  const bookReadStatus = card.appendChild(document.createElement("div"));
  bookReadStatus.classList.add("read-container");

  readStatusButton = bookReadStatus.appendChild(document.createElement("button"));
  readStatusButton.classList.add("read-status-button");
  readStatusButton.setAttribute("onclick", `toggleRead(${i});`);
  readStatusButton.textContent = `${book.read ? "READ" : "NOT READ"}`;

  const deleteContainer = card.appendChild(document.createElement("div"));
  deleteContainer.classList.add("delete-container");

  cardButtonDelete = deleteContainer.appendChild(document.createElement("button"));
  cardButtonDelete.classList.add("card-button-delete");
  cardButtonDelete.setAttribute("onclick", `deleteBook(${i})`);
  cardButtonDelete.textContent = "DELETE";
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}

function changeButtonReadColor() {
  if (readStatusButton.textContent == "READ") {
    readStatusButton.style.backgroundColor = "#84cc16";
  } else if (readStatusButton.textContent == "NOT READ") {
    readStatusButton.style.backgroundColor = "#dc2626";
  }
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}
