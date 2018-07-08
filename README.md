# React Grid Component

A generic grid system that can render any data-set that has x/y coordinates. It can also render a custom template for each cell within the grid. 

For demo purposes this instance renders a series of interactive Bubbles and X-Team logos.

<a href="https://jakesrassie.github.io/simple-grid-system/" target="_blank">DEMO</a>

## Getting Started

Installation:
```
npm install react-grid-component --save-dev
```

Usage (basic):
```
import {Grid} from 'react-grid-component';

export class Main extends React.Component {

  render() {
    return (<Grid totalColumns="41" totalRows="21" debugMode={true} cellTemplate={<YourTemplateGoesHere>} />);
  }
```

Usage (advanced):
```
import {Grid} from 'react-grid-component';

export class Main extends React.Component {

  render() {

    let gridData = this.retrieveGridData();

    return (<Grid totalColumns="41" totalRows="21" debugMode={true} data={gridData} cellTemplate={<YourDefaultTemplate/>} />);
  }

  retrieveGridData() {
    return [
      {x: 2, y: 5, cellTemplate: <YourAmazingTemplate/>},
      {x: 4, y: 1, cellTemplate: <YourAmazingTemplate/>},
      {x: 3, y: 7, cellTemplate: <AnotherAmazingTemplate/>}
    ];
  }
}
```

## Properties

columns {array} - columns rendered on the screen, each column contains x number of cells

totalColumns {number} - the number of columns the grid consists of

totalRows {number} - the number of rows the grid consists of

width {number} - the width of the grid

height {number} - the height of the grid

data {array} - the data to be rendered on the screen

debugMode {boolean} - enables grid stats

## Preview
<img src="http://funkyimg.com/i/2J6xr.png" align="middle">

