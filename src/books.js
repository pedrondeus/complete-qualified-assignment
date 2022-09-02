function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false)
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [borrowed, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let booksFilter = book.borrows.map( borrow =>{
    const accountX = findAuthorById(accounts, borrow.id)
    accountX.returned = borrow.returned;
    return accountX;
  }) ;
  return booksFilter.slice(0,10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
