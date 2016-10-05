var React = require('react');
var {Link} = require('react-router');

var Examples = function(props){
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Example locations to play around</p>
      <ol>
        <li><Link to="/?location=Fremont, CA">Fremont, CA</Link></li>
        <li><Link to="/?location=San Francisco, CA">San Francisco, CA</Link></li>
        <li><Link to="/?location=Rio, Brazil">Rio, Brazil</Link></li>
      </ol>
    </div>

  );
};

module.exports = Examples;
