import React, { Component } from 'react';
import SideBar from './SideBar';
import MainView from './MainView';

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      listItems: [1,2,3,4,5],
    };
  }

  increseListItems() {
    this.setState({listItems: [...this.state.listItems, this.state.listItems.length + 1 ]});
  }
  render() {
    return (
      <div style={{backgroundColor: '#f00', display: 'flex', height: '100vh', width: '100vw'}}>
        <SideBar listItems={this.state.listItems} />
        <MainView increseListItems={this.increseListItems.bind(this)} />
      </div>
    )
  }
}
