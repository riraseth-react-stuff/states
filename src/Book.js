import React, { Component } from "react";
// import Button from "./Button";
//Prop drilling, passing methods to children
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true
    };
  }

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
    // console.log(this.state.showInfo);
  };

  render() {
    const { id, img, title, author } = this.props.info;
    // const { handleDelete } = this.props;

    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            aut?
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h3>Title: {title}</h3>
          <h6>Author: {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>

          {/* conditional rendering */}

          {/* function */}
          {checkInfo(this.state.showInfo)}

          {/* ternary operator */}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              voluptatum!
            </p>
          ) : null} */}

          {/* and */}
          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
              veniam?
            </p>
          )} */}

          {/* <button type="button" onClick={() => handleDelete(id)}>
            delete me
          </button> */}
          {/* <Button handleDelete={handleDelete}></Button> */}
        </div>
      </article>
    );
  }
}
