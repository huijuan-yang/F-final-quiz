import React from 'react';
import './GroupDisplay.css';

class GroupDisplay extends React.Component {
  render() {
    return (
      <div className="groupBody">
        <nav className="nav">
          <h3>分组列表</h3>
          <button type="button" className="groupButton">
            分组学员
          </button>
        </nav>
        <div className="tableContainer">
          <table className="groupTable">
            <thead className="thead">1组</thead>
            <div className="tableBody">
              <tbody className="tbody">成吉思汗</tbody>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default GroupDisplay;
