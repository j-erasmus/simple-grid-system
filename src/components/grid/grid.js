import React from 'react';
/**/
import './grid.css';
import {GridCellModel} from './models/grid-cell-model';
import {GridStats} from "./grid-stats/grid-stats";

export class Grid extends React.Component {

  /**
   * this component renders a data grid on the screen
   * @param {array} columns - columns rendered on the screen, each column contains x number of cells
   * @param {number} totalColumns - the number of columns the grid consists of
   * @param {number} totalRows - the number of rows the grid consists of
   * @param {array} data - the data to be rendered on the screen
   * @param {boolean} debugMode - enables grid stats
   * */

  constructor(props) {
    super(props);
    this.state = {columns: [], coordinates: '0,0'};
  }

  render() {

    let totalCells = 0;

    let grid = this.state.columns.map((column, colIndex) => {

      let cells = column.map((cell, cellIndex) => {
        totalCells++;
        return (<div key={cellIndex} onMouseOver={()=>this.onCellMouseOver(cell)}> {cell.cellTemplate || this.props.cellTemplate} </div>)
      });

      return (<div key={colIndex} className="grid_column" style={{width: this.props.cellSize + 'px'}}> {cells} </div>)
    });

    let gridStats = this.props.debugMode ? <GridStats coordinates={this.state.coordinates} totalColumns={this.props.totalColumns} totalRows={this.props.totalRows} totalCells={totalCells}/> : null;

    return (
      <div>
        {gridStats}
        <div className="grid_wrapper">{grid}</div>
      </div>
    );

  }

  onCellMouseOver(cell) {
    let coordinates = `${cell.x},${cell.y}`;
    this.setState({coordinates});
  }

  componentDidMount() {
    this.init();
  }

  init() {

    this.renderGrid();
    this.renderData(this.props.data);
  }

  renderGrid() {

    let col = 0;
    let row = 0;

    while (col < this.props.totalColumns) {

      this.addColumn();
      col++;
    }

    while (row < this.props.totalRows) {

      this.addRow();
      row++;
    }
  }

  addColumn(isNewColumn) {

    let newColumnIndex = this.state.columns.length;
    let newColumnCells = isNewColumn ? this.generateCellsForColumn(newColumnIndex) : [];

    this.state.columns.push(newColumnCells);

    if (isNewColumn) {
      this.props.totalColumns++;
    }
  }

  generateCellsForColumn(columnIndex) {

    let cells = [];
    let rowIndex = 0;

    while (rowIndex < this.props.totalRows) {

      cells.push(new GridCellModel({x: columnIndex, y: rowIndex}));
      rowIndex++;
    }

    return cells;
  }

  addRow(isNewRow) {

    let columnIndex = 0;

    while (columnIndex < this.state.columns.length) {

      let newRowIndex = this.state.columns[columnIndex].length;
      let cell = new GridCellModel({x: columnIndex, y: newRowIndex});

      this.state.columns[columnIndex].push(cell);

      columnIndex++;
    }

    if (isNewRow) {
      this.props.totalRows++;
    }
  }

  renderData(dataSet) {

    let highestCoordinates = this.determineHighestCoordinates(dataSet);
    let newColumns = highestCoordinates.x - this.props.totalColumns; // If the data set has more columns than what is already rendered, this would be the amount of new columns to be added
    let newRows = highestCoordinates.y - this.props.totalRows; // If the data set has more rows than what is already rendered, this would be the amount of new rows to be added

    // If the data set has more columns than what is already rendered, the grid will add more columns accordingly
    while (newColumns > -1) {

      this.addColumn(true);

      newColumns--;
    }

    // If the data set has more rows than what is already rendered, the grid will add more rows accordingly
    while (newRows > -1) {

      this.addRow(true);

      newRows--;
    }

    dataSet.forEach(cellData => {
      this.setCellAt(cellData.x, cellData.y, cellData);
    });
  }

  determineHighestCoordinates(dataSet) {

    let highest_xValue = 0;
    let highest_yValue = 0;

    dataSet.forEach(cellData => {

      if (cellData.x > highest_xValue) {

        highest_xValue = cellData.x;
      }

      if (cellData.y > highest_yValue) {

        highest_yValue = cellData.y;
      }

    });

    return {x: highest_xValue, y: highest_yValue};
  }

  setCellAt(x, y, cellData) {

    let columns = this.state.columns;

    if (!columns[x]) {
      return;
    }

    columns[x][y] = cellData;

    this.setState({columns: columns});
  }

}

