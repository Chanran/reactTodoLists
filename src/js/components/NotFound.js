import React,{ Component } from 'react'

export default class NotFound extends Component{
  constructor(props) {
    super(props)
  }
  
  render() {
    const styles = {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        background: 'url(\'./img/404.jpg\') no-repeat',
        backgroundSize: 'cover',
        color: 'gray',
        fontSize: '28px'
      }
    }

    return (
      <div style={styles.root}>
        面码不见啦～404
      </div>
    )
  }
}