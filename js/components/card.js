var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var statement = "This is a card";

    return (
        <div>{statement}</div>
    )
};

module.exports = Card;
