setTimeout(() => {
  document.getElementById("heading").style.color = "blue";
}, 3000);

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Spread Operator

// let fname = ["P", "R", "A", "K", "A", "S", "H"];
// let lname = ["K"];

// // let fullName = fname + lname;
// let fullName = [...fname, ...lname];

// console.log(fullName);

//Template literals

// let fname = "Prakash";
// let lname = "K";

// console.log(`Welcome to JS Refresher ${fname} ${lname}`);

//Ternary Operator

// let age = 15;
// let cofirmation = age >= 18 ? "eligible for vote" : "not eligible";
// console.log(cofirmation);

//arrow functions

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// Optional Chaining
// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//   },
// };

// console.log(person?.address?.city); // Output: 'New York'

// const employee = {};

// console.log(employee?.address?.city); // Output: undefined

// Array Map

// let x = [1, 2, 3, 4, 5];

// let newNum = x.map((num) => num * 2);
// console.log(newNum);

// const books = getBooks();
// const titles = books.map((book) => book.title);
// console.log(titles);

const books = getBooks();
// const titles = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
// console.log(titles);

// Array Filter

// const longBooks = books.filter((book) => book.pages < 500);
// console.log(longBooks);

// multiple filter
// const longBooks = books
//   .filter((book) => book.pages < 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooks);

// Filter with Map
// const longBooks = books
//   .filter((book) => book.pages < 500)
//   .map((book) => book.title);
// console.log(longBooks);

// Array Reduce

// todo
// Array Sort

// let x = [3, 7, 1, 9];

// let sorted = x.sort((a, b) => a - b);
// console.log(sorted);

// Promise

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Prakash");

// Using Async await
//

// async function getTodos() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   let data = await res.json();
//   console.log(data);
// }
// getTodos();

// console.log("Prakash");
