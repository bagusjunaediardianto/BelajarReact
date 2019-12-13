import React, { Component } from 'react';
import {Header, Content, Footer} from './Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer tahundevelop = "2008" tahunupdate="2019"/>
      </div>
    );
  }
}

export default App;
