class GPS extends React.Component {

  render() {
    const latitude = "Latitude:\t" + this.props.latitude;
    const longitude = "Longitude\t" + this.props.longitude;

    return(
      React.createElement('div', null, [
        React.createElement('p', null, latitude),
        React.createElement('p', null, longitude)
      ])
    );
  }


}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : 400,
      longitude : 400
    };
    setInterval(this.changeState, 1000);
  }

  changeState = () => {
    let lat = 1 - getRandomInt(3);
    let lon = 1 - getRandomInt(3);
    this.setState({
      latitude : (this.state.latitude+lat),
      longitude : (this.state.longitude+lon)
    });
  }

  render() {
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;

    return(
      React.createElement(GPS, {latitude, longitude} )
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
