import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
      }
    }

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;