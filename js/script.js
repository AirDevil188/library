let myLibrary = [];

let submitButton = document.getElementById("submit-button");
let cardButtonRead = document.querySelector(".card-button-read");
let cardButtonDelete = document.querySelector(".card-button-delete");
let readStatusButton = document.querySelector(".read-status-button");
const addBookButton = document.querySelector(".add-book-button");
const bookContainer = document.getElementById("book-cards");

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

  const bookTitle = titleContainer.appendChild(document.createElement("p"));
  bookTitle.textContent = `“${book.title}”`;

  const authorContainer = card.appendChild(document.createElement("div"));
  authorContainer.classList.add("author-container");

  const authorPara = authorContainer.appendChild(document.createElement("p"));
  authorPara.textContent = `${book.author}`;

  const bookPagesContainer = card.appendChild(document.createElement("div"));
  bookPagesContainer.classList.add("pages-container");

  const bookPagesPara = bookPagesContainer.appendChild(document.createElement("p"));
  bookPagesPara.textContent = `${book.pages} pages`;

  const cardButtonsContainer = card.appendChild(document.createElement("div"));
  cardButtonsContainer.classList.add("card-buttons-container");

  readStatusButton = cardButtonsContainer.appendChild(document.createElement("button"));
  readStatusButton.classList.add("read-status-button");
  readStatusButton.setAttribute("onclick", `toggleRead(${i});`);
  readStatusButton.textContent = `${book.read ? "Read" : "Not Read"}`;

  cardButtonDelete = cardButtonsContainer.appendChild(document.createElement("button"));
  cardButtonDelete.classList.add("card-button-delete");
  cardButtonDelete.setAttribute("onclick", `deleteBook(${i})`);
  cardButtonDelete.textContent = "Delete";
}

function formValidation() {
  const inputs = document.getElementsByTagName("input");
  submitButton.disabled = true;
  addEventListener("input", () => {
    for (i = 0; i < inputs.length; i++) {
      if (inputs[(0, 1, 2)].value == "") {
        submitButton.disabled = true;
      } else if (inputs[(0, 1, 2)].value !== "") {
        submitButton.disabled = false;
      }
    }
  });
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}

function clearBookContainer() {
  bookContainer.textContent = "";
}

function changeButtonReadColor() {
  if (readStatusButton.textContent == "Read") {
    readStatusButton.style.backgroundColor = "#22c55e";
  } else if (readStatusButton.textContent == "Not Read") {
    readStatusButton.style.backgroundColor = "#dc2626";
  }
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

submitButton.addEventListener("click", () => {
  addBookToArray();
  displayBook();
});

addBookButton.addEventListener("click", () => {
  const formModal = document.getElementById("form-modal");
  formModal.showModal();
  document.querySelector(".form").reset();
  formValidation();
});
