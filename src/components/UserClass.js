import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "Dummy Name",
        username: "Dummy Username",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json();
    console.log(this.props.name + "Child Mount");
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  // never ever update state variables directly

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className='user-card'>
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>Name: {this.state.userInfo.name}</h1>
        <h1>UserName: {this.state.userInfo.username}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: siddharthapalav@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 *
 * --------------- MOUNTING --------------------------------
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState>
 *
 * -------------- UPDATE Cycle ------------------------------
 *
 *        render(API data)
 *        <HTML (now API data>)
 *        componentDidUpdate()
 *
 */
