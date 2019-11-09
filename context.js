const GPSContext = React.createContext({
  latitude : 0,
  longitude : 0
});

const CurrentContext = React.createContext({
  amperage : 0
});

const UltrasonicContext = React.createContext({
  distance : 0
});

const CompassContext = React.createContext({
  direction : 0
});
