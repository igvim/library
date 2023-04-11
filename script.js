const newBookForm = document.querySelector('form');

const libraryState = (() => {
  const library = [];
  const container = document.querySelector('.book-container');

  const Book = (title, author, pages, read) =>  ({ title, author, pages, read });

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

  const createCard = book => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    bookCard.classList.add('card');
    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
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