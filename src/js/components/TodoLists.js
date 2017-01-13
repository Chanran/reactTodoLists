import {Component,PropTypes} from 'react'
import Todo from './Todo'

export default class TodoLists extends Component{
  constructor(props, context) {
    super(props, context);
    this.props.onTodoClick.bind(this)
  }

  render(){
    return(
      <div className="todoLists">
        <ul>
            {this.props.TodoLists.map((todo,index) =>
              <Todo {...todo}
                    key={index}
                    onClick={this.props.onTodoClick(index)} />
            )}
        </ul>
      </div>
    )
  } 
}

TodoLists.propTyps = {
  onTodoClick:PropTypes.func.isRequired,
  todos:PropTypes.arrayOf(PropTypes.shapre({
    id:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }))
}