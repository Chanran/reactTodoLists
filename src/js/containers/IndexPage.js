import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { logout } from '../utils/auth'

import * as actions from '../actions/todoActions'
import TodoLists from '../components/TodoLists'
import InputTodo from '../components/InputTodo'

class IndexPage extends Component{
  constructor(props,context){
    super(props,context)
    this.close = this.close.bind(this)
  }

  close() {
    logout()
    hashHistory.push('/login')
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
        position: 'relative',
        padding: '30px',
        width: '300px',
        height:'300px',
        borderRadius: '5px',
        background:'white'
      },
      close: {
        position: 'absolute',
        top: '-7px',
        right: '-7px',
        border: '1px solid black',
        borderRadius: '50%',
        background: 'white'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.container}>
          <NavigationClose style={styles.close}
                           onClick={this.close} />
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