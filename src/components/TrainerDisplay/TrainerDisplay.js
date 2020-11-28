import React from 'react';
import './TrainerDisplay.css';
import getAllUngroupedTrainers from '../../api/UngroupedTrainerApi';

class TrainerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  async componentDidMount() {
    const trainerList = await getAllUngroupedTrainers();
    this.setState({ trainers: trainerList });
  }

  render() {
    const { trainers } = this.state;
    const trainerDisplayList = trainers.map((trainer) => {
      return (
        <div className="tagContainer">
          <div className="trainer" key={trainer.id}>
            {trainer.id}. {trainer.name}
          </div>
          <button type="button" className="deleteButton">
            X
          </button>
        </div>
      );
    });

    return (
      <div className="trainerBody">
        <h3>讲师列表</h3>
        <div className="trainerDisplayCell">
          {trainerDisplayList}
          <button type="button" className="addButton">
            + 添加讲师
          </button>
        </div>
      </div>
    );
  }
}

export default TrainerDisplay;
