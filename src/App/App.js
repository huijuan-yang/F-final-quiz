import React, { Component } from 'react';
import './App.scss';
import GroupDisplay from '../components/GroupDisplay/GroupDisplay';
import TraineeDisplay from '../components/TraineeDisplay/TraineeDisplay';
import TrainerDisplay from '../components/TrainerDisplay/TrainerDisplay';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupDisplay />
        <TrainerDisplay />
        <TraineeDisplay />
      </div>
    );
  }
}

export default App;
