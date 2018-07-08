import React from "react";
import { render } from "react-dom";
import "./styles.css";
import {Grid} from "../lib/grid/grid";
import {Bubble} from "./components/bubble/bubble";
import xTeam from './components/x-team/x-team-logo.json';
import {GridCellModel} from "../lib/grid/models/grid-cell-model";
import {XTeam} from "./components/x-team/x-team";

function Demo() {

  let gridData = retrieveGridData();

  return (
    <div>
      <h1>Demo of the grid component</h1>
      <Grid totalColumns="41" totalRows="21" data={gridData} debugMode={true} width="1230px" height="630px" cellTemplate={<Bubble size="30"/>} />
    </div>
  );

  function retrieveGridData() {

    let gridData = [];

    xTeam.forEach(cell =>
      gridData.push(new GridCellModel({x: cell.x, y: cell.y, cellTemplate: <XTeam/>}))
    );

    return gridData;
  }

}

render(<Demo />, document.getElementById("app"));
