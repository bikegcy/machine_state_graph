import React, { Component } from 'react';

class MachineCell extends Component {

  render() {
    let curStyle = {background: '#FF0000'};
    if (this.props.stage === 2) {
      curStyle.background = '#ff6600';
    } else if (this.props.stage === 3) {
      curStyle.background = '#FFFF00';
    } else if (this.props.stage === 4) {
      curStyle.background = '#ccff00';
    } else if (this.props.stage === 5) {
      curStyle.background = '#00FF00';
    }
    return(
      <div className = "grid-item" style={curStyle}>
        {this.props.status === 'Stop'? this.props.status: ''}
      </div>
    );
  }
}

export default MachineCell;