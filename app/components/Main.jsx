var React = require('react');

//import components
var Navbar = require('Navbar');

var Main = function(props){
  return (
    <div>
      <Navbar/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
