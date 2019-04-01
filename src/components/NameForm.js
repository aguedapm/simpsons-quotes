import React from "react";

class NameForm extends React.Component {
  state = { name: "Homer Simpson" }
  eventHandler = event => {
    this.setState({[event.target.name] : event.target.value })
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" onChange={this.eventHandler}/>
      </form>
    );
  }
}

export default NameForm;