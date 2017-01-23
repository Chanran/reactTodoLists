import React,{Component,PropType} from 'react'
import AppBar from 'material-ui/AppBar'

export default class navigateBar extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <AppBar title="TodoLists" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
  
}