var books = [
  { title: "book1", author: "author1", year: 2000, price: 300 },
  { title: "book2", author: "author2", year: 2001, price: 200 },
  { title: "book3", author: "author3", year: 2002, price: 100 },
];

setInterval(() => {
  const menu = prompt(
    "เลือกเมนูโดยการใส่ตัวเลข :\n1.addBook\n2.viewBooks\n3.editBook\n4.deleteBook"
  );
  switch (menu) {
    case "1":
      addBook();
      break;
    case "2":
      viewBooks();
      break;
    case "3":
      editBook();
      break;
    case "4":
      deleteBook();
      break;
    default:
      break;
  }
}, 0);

const addBook = () => {
  const title = prompt("Enter book title : ");
  const author = prompt("Enter book author : ");
  const year = prompt("Enter book year : ");
  const price = prompt("Enter book price : ");
  if (
    !title ||
    !author ||
    !year ||
    !price ||
    year < 0 ||
    year > 2024 ||
    price < 0
  ) {
    alert("book added Error");
  }
  books.push({
    title,
    author,
    year,
    price,
  });
  console.log("Add Book Sucessful!");
};

const viewBooks = () => {
  let result = "";
  books.forEach((book) => {
    result += `title:${book.title} author:${book.author} year:${book.year} price:${book.price}\n`;
  });
  alert(result);
};

const editBook = () => {
  const title_edit = prompt("Enter book title to be edit : ");
  const bookIndex = books.findIndex((ele) => ele.title === title_edit);

  if (bookIndex === -1) {
    alert("Book Not Found!");
    return;
  }

  const title = prompt("Enter book title : ", books[bookIndex].title);
  const author = prompt("Enter book author : ", books[bookIndex].author);
  const year = prompt("Enter book year : ", books[bookIndex].year);
  const price = prompt("Enter book price : ", books[bookIndex].price);

  if (
    !title ||
    !author ||
    !year ||
    !price ||
    year < 0 ||
    year > 2024 ||
    price < 0
  ) {
    alert("Error: Book not edited properly");
    return;
  }

  books[bookIndex].title = books[bookIndex].title = title;
  books[bookIndex].author = author;
  books[bookIndex].year = year;
  books[bookIndex].price = price;
  console.log(books);
};

const deleteBook = () => {
  const title_edit = prompt("Enter book title to be deleted: ");
  const bookIndex = books.findIndex((book) => book.title === title_edit);

  if (bookIndex === -1) {
    alert("Book Not found!");
    return;
  }

  books.splice(bookIndex, 1);
  console.log("Book deleted successfully!");
};
