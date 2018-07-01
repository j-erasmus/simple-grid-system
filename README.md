# Simple Grid System

A generic grid system that can render any data-set that has x/y coordinates. It can also render a custom template for each cell within the grid. 

For demo purposes this instance renders a series of interactive Bubbles and X-Team logos.

## Getting Started

Run (demo):
```
npm install
npm start
```

Check your http://localhost:3000/ or `open http://localhost:3000/`

Implementation:
```
<Grid totalColumns="10" totalRows="10" data={gridData} cellTemplate={<MyTemplate/>} />
```

## Classes

* **Main:** This is the main entry point of the application and composes an instance of the Grid component together with its data-set.

* **Grid:** A generic grid system that can render any data-set that has x/y coordinates. It can also render a custom template for each cell within the grid. In this instance, the grid renders a series of interactive Bubbles and X-Team logos.

* **Bubble:** This is a component I created for demonstration purposes. This will get rendered in the grid and can be interacted with by the end-user.

* **XTeam:** This is a component I created for demonstration purposes. This will get rendered in the grid. 

## Preview
<img src="http://funkyimg.com/i/2J6xr.png" align="middle">

