import React, { Component } from 'react';
import Header from '../header/header';
import MainTab from './mainTab';

class TabBox extends Component {
  render() {
    return (
      <>
        <Header />
        <MainTab navigation={this.props.navigation} gereed={this.props.gereed} tabOne={this.props.firstTab} tabTwo={this.props.secondTab} bgColor={this.props.bgColor} />
      </>
    );
  }
}

export default TabBox;