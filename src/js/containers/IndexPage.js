import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/todoActions'
import TodoLists from '../components/TodoLists'
import InputTodo from '../components/InputTodo'

class IndexPage extends Component{
  constructor(props,context){
    super(props,context)
  }  

  render(){
    const {dispatch,todoLists} = this.props
    const styles = {
       root:{
        display: 'flex',
        alignItems:'center',
        WebkitAlignItems:'center',
        justifyContent:'center',
        WebkitJustifyContent:'center',
        background:'url(\'./img/bg.jpg\') no-repeat',
        backgroundSize: 'cover',
        height:'100%'
      },
      container:{
        padding: '30px',
        width: '300px',
        height:'300px',
        borderRadius: '5px',
        background:'white'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.container}>
          <InputTodo newTodo={text => dispatch(actions.newTodo(text)) } />
          <TodoLists finishTodo={index => dispatch(actions.finishTodo(index))} 
                   redoTodo={index => dispatch(actions.redoTodo(index))}
                   todoLists={todoLists} />
        </div>
    </div>
    )
  }
}

IndexPage.propTypes = {
  todoLists:PropTypes.arrayOf(PropTypes.shape({
    type:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired).isRequired,
}

function mapStateToProps(state){
  return {
    todoLists:state.todoLists
  }
}

export default connect(mapStateToProps)(IndexPage)