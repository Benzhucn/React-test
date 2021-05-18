import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {getList, addTodoAction }from './actions/getList';
import { connect } from 'react-redux'

class App extends Component {
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
  }


  componentDidMount(){    
    this.props.getList();
   // this.props.store.dispatch(getList());

    this.props.store.dispatch({
      type:'GET_CARS',
      payload:''
    });
  }

  addTodo(){
    this.props.addTodoAction(this.refs.todoVal.value);
    //this.props.store.dispatch(addTodoAction(this.refs.todoVal.value));
  }

  render(){
    let list = this.props.list;
    let cars = this.props.cars;
    return (
      <div className="App">
        <input type="text" ref="todoVal"></input>
        <button onClick={this.addTodo}> Add </button>
        <ul>
          {list.map((item, index)=>{
            return <li key={item + index}>{item}</li>
          })
          }
        </ul>

        <span>Cars</span>
        <ul>
          {
            cars.map(
              (item, index) =>{
                return <li key={item + index}>{item}</li>
              }
            )
          }          
        </ul>
      </div>
    );
  }
}

//建立从store到components.props的映射
const mapStateToProps = ({list,cars}) => {
  return {
    list:[...list],
    cars:[...cars]
  }
}

//建立方法的映射,
const mapDispatchToProps = {
  getList,
  addTodoAction
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
