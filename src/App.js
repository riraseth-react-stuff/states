import React, { Component } from "react";
import Banner from "./components/header/Banner";

import { name, age, person } from "./data";
// const App = () => {
//   return (
//     <section>
//       <Banner></Banner>
//       <p>my content</p>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{person.name}</p>
//       <p>{person.age}</p>
//     </section>
//   );
// };

// import * as data from "./data";
// const App = () => {
//   return (
//     <section>
//       <p>my content</p>
//       <p>{data.name}</p>
//       <p>{data.age}</p>
//       <p>{data.person.name}</p>
//       <p>{data.person.age}</p>
//     </section>
//   );
// };

class App extends Component {
  render() {
    return (
      <section>
        <Banner></Banner>
        <p>my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </section>
    );
  }
}

export default App;
