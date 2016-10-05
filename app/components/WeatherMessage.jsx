var React = require('react');

var WeatherMessage = function(props){
  var {temp, location} = props;
  return (
    <div className="text-center">The temp in {location} is {temp}</div>
  );
};

module.exports = WeatherMessage;
