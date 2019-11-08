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
    const CurrentAmp = "Amps: " + this.props.amps;
    return (React.createElement('p', { className: "CurrentDraw" }, CurrentAmp));
  }
}

function UltrasonicSensor(props) {
  return (
    React.createElement('div', null, `Distance (feet): `, props.distance)
  );
}

function AntennaSignal(props){
  return (
    React.createElement('div', null, `Antenna Signal (Decibels): `, props.decibels)
  );
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 400,
      longitude: 400,
      Amperage: 400,
      distance: 400,
      decibels: 400,
    };
    setInterval(this.changeState, 1000);
  }

  changeState = () => {
    let lat = 1 - getRandomInt(3);
    let lon = 1 - getRandomInt(3);
    let amp = 1 - getRandomInt(3);
    let dis = 1 - getRandomInt(3);
    let dec = 1 - getRandomInt(3);//dec means decibels
    this.setState({
      latitude: (this.state.latitude + lat),
      longitude: (this.state.longitude + lon),
      Amperage: (this.state.Amperage + amp),
      distance: (this.state.distance + dis),
      decibels: (this.state.decibels + dec),
    });
  }

  render() {
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const amps = this.state.Amperage;
    const dists = this.state.distance;
    const decibels = this.state.decibels;
    return (
      React.createElement('div', null, [
        React.createElement(GPS, { latitude, longitude }),
        React.createElement(CurrentDraw, { amps }),
        React.createElement(UltrasonicSensor, { distance: dists }),
        React.createElement(AntennaSignal, {decibels})
      ])
    );
  }

}

ReactDOM.render(
  React.createElement(MainContainer, null),
  document.getElementById('root')
);

// ========================================

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}