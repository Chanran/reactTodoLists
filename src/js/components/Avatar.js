import React,{Component,PropTypes} from 'react'


export default class Avatar extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    let styles={
        root:{

        }
    }
    return( 
      <div style={styles.root}>
        <img src='./img/avatar.jpg' alt='夏目和猫咪先生' />
      </div>
    )
  }
}