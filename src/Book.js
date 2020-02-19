import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <h3>Title: {title}</h3>
        <h6>Author: {author}</h6>
      </article>
    );
  }
}
