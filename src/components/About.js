import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Mumbai Class"} />
        <UserClass name={"Second"} location={"Mumbai Class"} />
      </div>
    );
  }
}

/*
 - Parent Constructor
 - Parent Render
  
  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  <DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount

 - Parent ComponentDidMount
*/

export default About;
