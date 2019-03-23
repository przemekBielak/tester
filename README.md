## Hardware tester application

## Motivation
Application was created to control the hardware tester device.  
Application is running on a low power linux microcontroller as a webserver. User can wirelessly connect to the device using the web interface.
 
## Screenshots
![Alt Text](https://i.imgur.com/HzhX7vD.gif)

## Tech/framework used

<b>Built with</b>
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://www.styled-components.com/)
- [Chart.js](https://www.chartjs.org/)
- [Express.js](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)

## Features
Application provides a flexible layout for a configurable number of connected hardware modules.  
Express.js backend is used to control the device. React frontend configures the device and sends the AJAX call to the backend. Backend then updates the device configuration.  
Frontend is updated from backend AJAX calls. Data can be visualised on graphs in real time.

There is a custom Webpack config and npm scripts to build and run the application.

## Installation

Build production server application
```bash
npm run build 
```

Start production on port :5000
```bash
npm run server
```

Start development server on port :5000
```bash
npm run server-dev
```

## License
MIT © [Przemysław Bielak]()