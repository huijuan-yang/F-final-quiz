import React from 'react';
import './TraineeDisplay.css';
import getAllTrainees from '../../api/TraineeApi';

class TraineeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  async componentDidMount() {
    const traineeList = await getAllTrainees();
    this.setState({ trainees: traineeList });
  }

  render() {
    const { trainees } = this.state;
    const traineeDisplayList = trainees.map((trainee) => {
      return (
        <div className="trainee">
          {trainee.id}. {trainee.name}
        </div>
      );
    });

    return (
      <div className="traineeBody">
        <h3>学员列表</h3>
        <div className="traineeDisplayCell">
          {traineeDisplayList}
          <button type="button" className="addButton">
            + 添加学员
          </button>
        </div>
      </div>
    );
  }
}

export default TraineeDisplay;
