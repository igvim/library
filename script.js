const newBookForm = document.querySelector("form");

class LibraryState {
  library = [];

  container = document.querySelector(".book-container");

  Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    return { title, author, pages };
  }

  addBook = () => {
    const newBookTitle = document.querySelector("#title");
    const newBookAuthor = document.querySelector("#author");
    const newBookPages = document.querySelector("#pages");
    const newBook = this.Book(
      newBookTitle.value,
      newBookAuthor.value,
      newBookPages.value
    );
    this.library.push(newBook);
  };

  deleteBook = (bookId) => {
    this.library.splice(bookId, 1);
  };

  deleteCard(bookId) {
    const targetCard = document.querySelector(`div[data-book-id='${bookId}']`);
    this.container.removeChild(targetCard);
  }

  createCard = (book, bookId) => {
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const rmButton = document.createElement("button");

    bookCard.dataset.bookId = bookId;
    bookCard.classList.add("card");
    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    rmButton.textContent = "Remove Book";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(rmButton);
    this.container.appendChild(bookCard);

    rmButton.addEventListener("click", () => {
      this.deleteBook(bookId);
      this.deleteCard(bookId);
    });
  };

  clear = () => {
    this.container.innerHTML = "";
  };

  display = () => {
    this.library.forEach((el, i) => this.createCard(el, i));
  };
}

const library = new LibraryState();

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  library.addBook();
  newBookForm.reset();
  library.clear();
  library.display();
});
