let books =[{title: "football", authorName: "Gerard", releaseYear: 2014},{title: "coding", authorName: "abod", releaseYear: 2012}, {title: "math", authorName: "james", releaseYear: 2015}];

function sortByYear(book1, book2){
if (book1["releaseYear"] < book2["releaseYear"]) {
  return -1
}
else if (book1["releaseYear"] > book2["releaseYear"]) {
  return 1
}
else {
  return 0
} 
}

let filteredBooks = books
.filter((book) => book["releaseYear"] <= 2014)
console.log (filteredBooks)

filteredBooks.sort(sortByYear);