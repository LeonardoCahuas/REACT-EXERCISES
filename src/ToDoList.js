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
    const items = this.state.items.map((item, index) => 
    <li  key={index}>
        {item}
        <button type="reset" onClick={()=> this.remove(index)}>Remove</button>
    </li>);

    return (
      <div>
        <ul>{items}</ul>
        <input type="text" onChange={this.newToDo} value={this.state.newItem} />
        <button type="submit" onClick={this.addToDo}>Add ToDo</button>
        <button type="reset" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default ToDoList;
