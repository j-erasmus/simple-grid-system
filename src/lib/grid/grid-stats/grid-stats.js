import React from 'react';
/**/
import './grid-stats.css';

export class GridStats extends React.Component {

  render() {

    return (
      <div className="stats">
          <p>Coordinates: {this.props.coordinates}</p>
          <p>Columns: {this.props.totalColumns}</p>
          <p>Rows: {this.props.totalRows}</p>
          <p>Cells: {this.props.totalCells}</p>
      </div>
    );

  }

}

