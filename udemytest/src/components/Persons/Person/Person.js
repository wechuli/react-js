import React, { Component } from "react";
import styles from "./Person.module.css";

// const person = ( props ) => {

//     return (
//         <div className={styles.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);

    //we can implement state here using this.state(){} and use it the same way as before
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>

     );
    // return [
    //   <p onClick={this.props.click}>
    //     , I'm {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p>{this.props.children}</p>,
    //   <input
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ];
  }
}

Person.propTypes = {
click: propTypes.func,
name:propTypes.string,
age:propTypes.number,
};
export default Person;
