const newBookForm = document.querySelector('form');

const libraryState = (() => {
  const library = [];
  const container = document.querySelector('.book-container');

  const Book = (title, author, pages, read) => {
    const info = () => `${title} by ${author}, ${pages} pages`
    return { title, author, pages, read, info }
  }

  const addBook = () => {
    const newBookTitle = document.querySelector('#title');
    const newBookAuthor = document.querySelector('#author');
    const newBookPages = document.querySelector('#pages');
    // const isBookRead = 
    const newBook = Book(
      newBookTitle.value, 
      newBookAuthor.value, 
      newBookPages.value, 
      true
      );
    library.push(newBook);
  };

  const createCard = storedBook => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.textContent = storedBook.info();
    container.appendChild(bookCard);
  };

  const clear = () => {
    container.innerHTML = '';
  };

  const display = () => {
    library.forEach(el => createCard(el));
  };

  return { addBook, clear, display }
})();

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  libraryState.addBook();
  newBookForm.reset();
  libraryState.clear();
  libraryState.display();
})