function findAccountById(accounts, idAddress ) {
  return accounts.find((account) => account.id === idAddress);
}

function sortAccountsByLastName(accounts) {
  const namesSorted = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return namesSorted;
}

function getTotalNumberOfBorrows(account, books) {
  let accumulator = 0;
  const elements = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (account.id === borrow.id){
        accumulator += 1;
      }
    })
  });
  return accumulator;
}

function getBooksPossessedByAccount(account, books, authors) {
  //gets all borrow books that matches with account's id and returned status
  const bookInfo = books.filter((book) => 
    book.borrows.some(acc => acc.id === account.id && acc.returned === false ));
  //returns the author thats matched by the authorId on books
  const arrayResult = bookInfo.map((book) => {
    const authorFound = authors.find(author => author.id === book.authorId)
    book.author = authorFound;
    return book;
    });
  return bookInfo;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
