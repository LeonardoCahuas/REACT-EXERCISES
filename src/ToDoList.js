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
  reset = ()=>{
    this.setState({
        items: [],
        newValue: ""
    })
  }
  remove = (index)=>{
    const newList = this.state.items;
    newList.splice(index, 1);
    this.setState({
        items: newList,
        newValue: this.state.newValue
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.items, this.remove)}
        <input type="text" onChange={this.newToDo} value={this.state.newItem} />
        <button type="submit" onClick={this.addToDo}>Add ToDo</button>
        <button type="reset" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default ToDoList;
