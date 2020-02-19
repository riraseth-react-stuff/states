import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";

export default class BookList extends Component {
  // state = {
  //   books: [
  //     {
  //       id: 1,
  //       book: "book number 1",
  //       author: "john doe"
  //     },
  //     {
  //       id: 2,
  //       book: "book number 2",
  //       author: "john cena"
  //     }
  //   ]
  // };

  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }

  // state = {
  //   books: booksData
  // };

  handleDelete = () => {
    console.log(`I'm from the parent container`);
  };

  render() {
    // const books = this.state.books.map(item => item.book);

    return (
      <section>
        <h3>this is our BookList</h3>
        {this.state.books.map(item => {
          return (
            <Book
              key={item.id}
              info={item}
              handleDelete={this.handleDelete}
            ></Book>
          );
        })}
      </section>
    );
  }
}
