var React = require('react');

//import components
var Navbar = require('Navbar');

var Main = function(props){
  return (
    <div>
      <Navbar/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
