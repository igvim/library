const newBookForm = document.querySelector('form');

const Book = (title, author, pages, read) => {
  const info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`
  }
  return { title, author, pages, read, info }
}

const libraryState = {
  library: [],
  container: document.querySelector('.book-container'),
  createCard: function(storedBook) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.textContent = storedBook.info();
    this.container.appendChild(bookCard);
  },
  addBook: function() {
    const newBookTitle = document.querySelector('#title');
    const newBookAuthor = document.querySelector('#author');
    const newBookPages = document.querySelector('#pages');
    //const isBookRead = 
    const newBook = Book(
      newBookTitle.value, 
      newBookAuthor.value, 
      newBookPages.value, 
      true
      );
    this.library.push(newBook);
  },
  clear: function() {
    this.container.innerHTML = '';
  },
  display: function() {
    this.library.forEach(el => this.createCard(el));
  },
}

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  libraryState.addBook();
  newBookForm.reset();
  libraryState.clear();
  libraryState.display();
})