import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: [
      "HTML",
      "CSS"
    ],
    newItem: ""
  };

  addToDo = () => {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: ""
    });
  };

  newToDo = (event) => {
    const newValue = event.target.value;
    this.setState({
      items: this.state.items,
      newItem: newValue
    });
  };

  render() {
    const items = this.state.items.map((item) => <li>{item}</li>);

    return (
      <div>
        <ul>{items}</ul>
        <input type="text" onChange={this.newToDo} value={this.state.newItem} />
        <button type="submit" onClick={this.addToDo}>Add ToDo</button>
      </div>
    );
  }
}

export default ToDoList;
