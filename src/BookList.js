import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  state = {
    books: [
      {
        id: 1,
        book: "book number 1",
        author: "john doe"
      },
      {
        id: 2,
        book: "book number 2",
        author: "john cena"
      }
    ]
  };
  //this.setState({})
  render() {
    // const books = this.state.books.map(item => item.book);

    return (
      <section>
        <h3>this is our BookList</h3>
        {this.state.books.map(item => {
          return <Book key={item.id} info={item}></Book>;
        })}
      </section>
    );
  }
}
