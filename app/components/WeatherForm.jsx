var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input ref="location" type="text" className="expanded"/>
        <button className="button hollow expanded">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
