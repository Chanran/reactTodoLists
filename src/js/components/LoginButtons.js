import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'

export default class LoginButtons extends Component{
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let styles = {
      root:{
        margin:'20px auto',
      },
      button1:{
        marginRight:'30px'
      },
      button2:{

      }
    }
    return (
      <div style={styles.root}>
          <RaisedButton label='登  录' 
                        secondary={true} 
                        style={styles.button1} 
                        type='button' 
                        onClick={this.props.login} />
          <RaisedButton label='游客登录' 
                        primary={true} 
                        style={styles.button2} 
                        type='button' />
      </div>
    );
  }
}