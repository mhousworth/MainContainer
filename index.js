class Compass extends React.Component {

  render() {
    const direction = "Direction: \t" + this.props.direc;

    return ( React.createElement('p', { className: "Compass" }, direction));
  }
}

class GPS extends React.Component {

  render() {
    const latitude = "Latitude:\t" + this.props.latitude;
    const longitude = "Longitude\t" + this.props.longitude;

    return (
      React.createElement('div', null, [
        React.createElement('p', {key:1}, latitude),
        React.createElement('p', {key:2}, longitude)
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
      direction: 400,
    };
    setInterval(this.changeState, 1000);
  }

  changeState = () => {
    let lat = 1 - getRandomInt(3);
    let lon = 1 - getRandomInt(3);
    let amp = 1 - getRandomInt(3);
    let dis = 1 - getRandomInt(3);
    let dec = 1 - getRandomInt(3);//dec means decibels
    let dir = 1 - getRandomInt(3);
    this.setState({
      latitude: (this.state.latitude + lat),
      longitude: (this.state.longitude + lon),
      Amperage: (this.state.Amperage + amp),
      distance: (this.state.distance + dis),
      decibels: (this.state.decibels + dec),
      direction: (this.state.direction + dir),
    });
  }

  render() {
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const amps = this.state.Amperage;
    const dists = this.state.distance;
    const decibels = this.state.decibels;
    const direc = this.state.direction;
    
    return (
      React.createElement('div', null, [
        React.createElement(GPS, { key:1, latitude, longitude }),
        React.createElement(CurrentDraw, { key:2, amps }),
        React.createElement(UltrasonicSensor, { key:3, distance: dists }),
        React.createElement(AntennaSignal, {key:4, decibels}),
        React.createElement(Compass, { key:5, direc })
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