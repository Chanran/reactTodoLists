import React, { Component } from 'react'
import { connect } from 'react-redux'

import RefreshIndicator from 'material-ui/RefreshIndicator'

class Loading extends Component{
  constructor(props, context) {
    super(props, context)
  }

  render() {

    const { isLoading } = this.props

    const styles = {
      root: {
        display: isLoading ? 'block' : 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '99',
        width: '100%',
        height: '100%',
        background: 'white'
      },
      loading: {
        display: 'inline-block',
        position: 'relative'
      }
    }

    return (
      <div style={styles.root}>
        <RefreshIndicator size={80}
                          left={150}
                          top={300}
                          loadingColor="#FF9800"
                          status="loading"
                          style={styles.loading}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(Loading)
