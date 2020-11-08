import React from "react";
import logo from "./sp-logo.png";
import "./App.css";
 
//class based components
class App extends React.Component{

  //props and state
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list:[]
    }
  }


  //methods 
  addItem(todoValue){
    if(todoValue!==""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  //delete
  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item=>item.id !==id);
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo" alt="logo"/>
        <h1 className="app-title">SuperMan ToDo App:</h1>
        <div className="container">Add Items Here..<br/>
        <input type="text"
        className="input-text"
        placeholder="Write a ToDo Here"
        required
        value={this.state.newItem}
        onChange={e=>this.updateInput(e.target.value)}
        />
        <button 
        className="add-btn"
        onClick={()=>this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}
        
        >Add to do</button>
        <div className="item-list">
          <ul>
          {this.state.list.map(item=>{
            return(
              <li key={item.id}>
              <input type="checkbox"
              name="idDone"
              checked={item.isDone}
              onChange={()=>{}}
              />
              {item.value}
              <button
              className="btn"
              onClick={()=>this.deleteItem(item.id)}
              >Delete</button>
              </li>
            );
          })}
              <li>
              <input type="checkbox" name="" id=""/>
            Add Your To DO And Remove By Pressing:
              <button className="btn">Delete</button>
              </li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}


export default App;