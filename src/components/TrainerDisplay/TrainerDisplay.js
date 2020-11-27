import React from 'react';
import './TrainerDisplay.css';
import getAllTrainers from '../../api/TrainerApi';

class TrainerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  async componentDidMount() {
    const trainerList = await getAllTrainers();
    this.setState({ trainers: trainerList });
  }

  render() {
    const { trainers } = this.state;
    const trainerDisplayList = trainers.map((trainer) => {
      return (
        <div className="trainer">
          {trainer.id}. {trainer.name}
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
