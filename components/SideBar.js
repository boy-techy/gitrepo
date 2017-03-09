import React, { Component } from 'react';

export default class SideBar extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#00f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', flex: 2}}>
        {
          this.props.listItems.map((val, i) => {
            return (
              <div key={i}>
                {val}
              </div>
            )
          })
        }
      </div>
    )
  }
}
