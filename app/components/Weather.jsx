var React = require('react');

//Import components
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');

//api
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errorMessage: null
    };
  },
  handleSearch: function(location){
    var self = this;

    this.setState({
      isLoading: true,
      errorMessage: null
    });

    function success(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }

    function failed(err){
      self.setState({
        isLoading: false,
        errorMessage: err.message
      });
    }

    openWeatherMap.getTemp(location).then(success, failed);
  },
  render: function(){

    var {temp, location, isLoading, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather info ...</h3>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError(){
      if(errorMessage !== null){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
      <h3 className="page-title text-center">Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
