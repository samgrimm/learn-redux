var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Final Countdown</li>
          
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by Samantha Cabral</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
