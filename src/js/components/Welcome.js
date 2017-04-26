import React, { Component } from 'react'
import { Link } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'

export default class Welcome extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render() {

    const styles = {
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: 'url(\'./img/index_bg.jpg\') no-repeat',
        backgroundSize: 'cover'
      }
    }

    return (
      <div style={styles.root}>
        <Link to="/index">
          <RaisedButton label="进入todoLists" primary={true} />
        </Link>
      </div>
    )
  }
}