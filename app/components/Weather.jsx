var React = require('react');

//Import components
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

//api
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var self = this;

    this.setState({isLoading: true});

    function success(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }

    function failed(errorMsg){
      self.setState({
        isLoading: false
      });
      alert(errorMsg);
    }

    openWeatherMap.getTemp(location).then(success, failed);
  },
  render: function(){

    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather info ...</h3>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
      <h3 className="page-title text-center">Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
