import React from 'react';
import './GroupDisplay.css';
import getAllGroups from '../../api/GroupApi';

class GroupDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  async componentDidMount() {
    const groupList = await getAllGroups();
    this.setState({ groups: groupList });
  }

  render() {
    const { groups } = this.state;
    const groupDisplay = groups.map((group) => {
      return (
        <table className="groupTable" key={group.groupId}>
          <thead className="tableHead">
            <tr className="thead">
              <td>{group.groupName}</td>
            </tr>
          </thead>
          <tbody className="tableBody">
            {group.groupTrainees.map((trainee) => (
              <tr className="tbody" key={trainee.id}>
                <td>
                  {trainee.id}. {trainee.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    });

    return (
      <div className="groupBody">
        <nav className="nav">
          <h3>分组列表</h3>
          <button type="button" className="groupButton">
            分组学员
          </button>
        </nav>
        <div className="tableContainer">{groupDisplay}</div>
      </div>
    );
  }
}

export default GroupDisplay;
