import React,{Component,PropTypes} from 'react'
import Todo from './Todo'

export default class TodoLists extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    let {todoLists} = this.props
    console.log(todoLists)
    return(
      <div className="todoLists">
        <ul>
            {todoLists.map((todo,index) =>
              <Todo {...todo}
                    key={index}
                    finishTodo={(index) => this.props.finishTodo(index)}
                    redoTodo={(index) => this.props.redoTodo(index)} />
            )}
        </ul>
      </div>
    )
  } 
}

TodoLists.propTyps = {
  finishTodo:PropTypes.func.isRequired,
  todos:PropTypes.arrayOf(PropTypes.shape({
    type:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }))
}