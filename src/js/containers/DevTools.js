import React from 'react'
import {createDevTools} from 'redux-devtools'
import logMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <logMonitor />
  </DockMonitor>
)