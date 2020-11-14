import React from 'react';
import './MemberDisplay.css';
import getAllMembers from '../../api/MemberApi';

class MemberDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }

  async componentDidMount() {
    const memberList = await getAllMembers();
    this.setState({ members: memberList });
  }

  render() {
    const { members } = this.state;
    const memberDisplayList = members.map((member) => {
      return (
        <div className="member">
          {member.id}. {member.name}
        </div>
      );
    });

    return (
      <div className="memberBody">
        <h3>学员列表</h3>
        <div className="memberDisplayCell">
          {memberDisplayList}
          <button type="button" className="addButton">
            + 添加学员
          </button>
        </div>
      </div>
    );
  }
}

export default MemberDisplay;
