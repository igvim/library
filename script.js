const newBookForm = document.querySelector('form');

const libraryState = (() => {
  const library = [];
  const container = document.querySelector('.book-container');

  const Book = (title, author, pages, read) =>  ({ title, author, pages, read });

  const addBook = () => {
    const newBookTitle = document.querySelector('#title');
    const newBookAuthor = document.querySelector('#author');
    const newBookPages = document.querySelector('#pages');
    const newBook = Book(
      newBookTitle.value, 
      newBookAuthor.value, 
      newBookPages.value, 
      true
      );
    library.push(newBook);
  };

  const deleteBook = bookId => {
    library.splice(bookId, 1);
  }

  const deleteCard = bookId => {
    const targetCard = document.querySelector(`div[data-book-id='${bookId}']`);
    container.removeChild(targetCard);
  }

  const createCard = (book, bookId) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const rmButton = document.createElement('button');

    bookCard.dataset.bookId = bookId;
    bookCard.classList.add('card');
    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    rmButton.textContent = 'Remove Book';

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(rmButton);
    container.appendChild(bookCard);

    rmButton.addEventListener('click', () => {
      deleteBook(bookId);
      deleteCard(bookId);
    });
  };

  const clear = () => {
    container.innerHTML = '';
  };

  const display = () => {
    library.forEach((el, i) => createCard(el, i));
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