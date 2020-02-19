import React, { Component } from "react";

// this.setState({})
export default class Book extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 1
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log("clicked");
  //   console.log(this.state.count);
  // }

  state = {
    count: 1
  };

  // handleClick = () => {
  //   console.log("clicked");
  //   console.log(this.state.count);
  // };

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  lowerCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h3>Title: {title}</h3>
          <h6>Author: {author}</h6>
          <h3>count: {this.state.count}</h3>
          <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset count
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button>
        </div>
      </article>
    );
  }
}
