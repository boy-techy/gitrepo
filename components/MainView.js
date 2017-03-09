import React, { Component } from 'react';

export default class MainView extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 8}}>
        <div style={{cursor: 'pointer'}} onClick={this.props.increseListItems}>
          click Me
        </div>
      </div>
    )
  }
}
