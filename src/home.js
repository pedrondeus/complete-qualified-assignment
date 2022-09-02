function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

function fiveOrLessFunction (result) {
  result.sort((a, b) => b.count - a.count);
  return result.slice(0,5)
}

function getMostCommonGenres(books) {
  const result = books.reduce((accum, book) => {
    const genre = book.genre;
    const genreInfo = accum.find((element) => element.name === genre);
    if (!genreInfo) {
      const newGenreInfo = { name: genre, count: 1}; 
      accum.push(newGenreInfo);
    } else {genreInfo.count ++ }
   return accum;
  }, []);
  return fiveOrLessFunction(result);
}

function getMostPopularBooks(books) {
  const result = books.reduce ((accum, book) => {
    const bookNames = book.title;
    const popularCount = book.borrows.length;
    const newInfo = {name: bookNames, count: popularCount};
    accum.push(newInfo);
    return accum;
  }, []);
  return fiveOrLessFunction(result);
}

function getMostPopularAuthors(books, authors) {
  let result= [];
  authors.forEach(author => {
    let returnAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if(book.authorId === author.id){
        returnAuthor.count += book.borrows.length
      }
    })
    result.push(returnAuthor)
  })
  return fiveOrLessFunction(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
