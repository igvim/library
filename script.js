const library = [];
const newBookForm = document.querySelector('form');

const bookState = {
  bookContainer: document.querySelector('.book-container'),
  create: function createBookCard(storedBook) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.textContent = storedBook.info();
    this.bookContainer.appendChild(bookCard);
  },
  clear: function clearBooks() {
    this.bookContainer.innerHTML = '';
  }
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages`
}

function addBookToLibrary() {
  const newBookTitle = document.querySelector('#title');
  const newBookAuthor = document.querySelector('#author');
  const newBookPages = document.querySelector('#pages');
  //const isBookRead = 
  const newBook = new Book(
    newBookTitle.value, 
    newBookAuthor.value, 
    newBookPages.value, 
    true
    );
  library.push(newBook);
}

function displayBooks() {
  library.forEach(el => bookState.create(el));
}

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  newBookForm.reset();
  bookState.clear();
  displayBooks();
})