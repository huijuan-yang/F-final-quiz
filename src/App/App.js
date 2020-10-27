import React, { Component } from 'react';
import './App.scss';
import GroupDisplay from '../components/GroupDisplay/GroupDisplay';
import MemberDisplay from '../components/MemberDisplay/MemberDisplay';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupDisplay />
        <MemberDisplay />
      </div>
    );
  }
}

export default App;
