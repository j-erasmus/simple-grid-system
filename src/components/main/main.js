import React from 'react';
/**/
import './main.css';
import {Grid} from '../grid/grid';
import {XTeam} from '../x-team/x-team';
import xTeam from '../x-team/x-team-logo';
import {GridCellModel} from '../grid/models/grid-cell-model';
import {Bubble} from '../bubble/bubble';

export class Main extends React.Component {

  render() {

    let gridData = this.retrieveGridData();

    return (
      <div>
        <span className="title">- Jacques Erasmus -</span>
        <Grid totalColumns="41" totalRows="21" data={gridData} debugMode={true} cellTemplate={<Bubble size="30"/>} />
      </div>
    );

  }

  retrieveGridData() {

    let gridData = [];

    xTeam.forEach(cell =>
      gridData.push(new GridCellModel({x: cell.x, y: cell.y, cellTemplate: <XTeam/>}))
    );

    return gridData;
  }
}

