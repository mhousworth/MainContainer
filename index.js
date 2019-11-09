class GPS extends React.Component {

  render() {
    const latitude = "Latitude:\t" + this.props.latitude;
    const longitude = "Longitude\t" + this.props.longitude;

    return (
      React.createElement('div', null, [
        React.createElement('p', null, latitude),
        React.createElement('p', null, longitude)
      ])
    );
  }
}

class CurrentDraw extends React.Component {
  render() {
    const CurrentAmp = "Amps: " + this.props.amperage;
    return (React.createElement('p', { className: "CurrentDraw" }, CurrentAmp));
  }
}

class UltrasonicSensor extends React.Component {
  render() {
    console.log('Rendering')
    return (
      React.createElement('div', null, `Distance (feet): `, this.props.distance)
    )
  };
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gps: {
        latitude: 400,
        longitude: 400},
      current: {amperage: 400},
      distance: {distance: 400},
    };
    setInterval(this.changeState, 1000);
  }

  changeState = () => {
    let lat = 1 - getRandomInt(3);
    let lon = 1 - getRandomInt(3);
    let amp = 1 - getRandomInt(3);
    let dis = 1 - getRandomInt(3);
    this.setState({
      gps: {
        latitude: (this.state.gps.latitude + lat),
        longitude: (this.state.gps.longitude + lon)
      },
      current: {
        amperage: (this.state.current.amperage + amp)
      },
      // distance: {
      //   distance: (this.state.distance.distance + dis)
      // }
    });
  }

  render() {
    return (
      React.createElement('div', null, [
        React.createElement(UltrasonicContext.Provider, {value:this.state.distance},
          createComponentFromContext(UltrasonicSensor, UltrasonicContext)
        ),
        React.createElement(GPSContext.Provider, {value:this.state.gps},
          createComponentFromContext(GPS, GPSContext),
        ),
        React.createElement(CompassContext.Provider, {},

        ),
        React.createElement(CurrentContext.Provider, {value:this.state.current},
          createComponentFromContext(CurrentDraw, CurrentContext),
        )
      ])
    );
  }
}

ReactDOM.render(
  React.createElement(MainContainer, null),
  document.getElementById('root')
);

// ========================================

function createComponentFromContext(component, context) {

  return (
      React.createElement(context.Consumer, null,
        props => {
          return React.createElement(component, props)}
      )
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
